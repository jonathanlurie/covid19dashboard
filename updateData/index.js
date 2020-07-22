const fetch = require('node-fetch')
const xlsx = require('node-xlsx')
const fs = require('fs')
const countryCodes = require('./countryCodes.json')


async function main(){
  // to convert from three letter country code to two letter country codes
  // (this is because the datasource change the format half way)
  let twoLetterCode2threeLetterCode = {}
  countryCodes.forEach(c => twoLetterCode2threeLetterCode[c.alpha3code] = c.alpha2code)

  // https://www.ecdc.europa.eu/sites/default/files/documents/COVID-19-geographic-disbtribution-worldwide-2020-03-18.xls
  let date = new Date()
  let day = date.getUTCDate()
  day = day < 10 ? `0${day}` : `${day}`
  let month = date.getUTCMonth() + 1
  month = month < 10 ? `0${month}` : `${month}`
  let year = `${date.getUTCFullYear()}`

  let reportUrl = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/csv'
  let reportRes = await fetch(reportUrl)

  if(reportRes.status > 200){
    console.log('❌  The report URL is not correct, please visit \n https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide')
    return
  }

  let reportXlsBuffer = await reportRes.buffer()
  let workSheetsFromBuffer = xlsx.parse(reportXlsBuffer)
  // console.log(JSON.stringify(workSheetsFromBuffer, null, 2))

  let data = workSheetsFromBuffer[0].data


  // keys are the code
  let countries = {}

  let worldByDate = {}

  // arrange the data per country
  for(let i=1; i<data.length; i++){
    let entry = data[i]
    let countryCode = twoLetterCode2threeLetterCode[entry[8]]

    // date is UTC at noon
    let recordDate = new Date()
    recordDate.setUTCFullYear(parseInt(entry[3]), parseInt(entry[2])-1, parseInt(entry[1]))
    recordDate.setUTCHours(12, 0, 0, 0)


    let objectEntry = {
      date: recordDate,
      cases: entry[4] < 0 ? 0 : entry[4],
      deaths: entry[5] < 0 ? 0 : entry[5]
    }

    if(!(countryCode in countries)){
      countries[countryCode] = []
    }

    countries[countryCode].push(objectEntry)

    // adding the world record
    jsonDate = recordDate.toJSON()
    if(!(jsonDate in worldByDate)){
      worldByDate[jsonDate] = {
        cases: 0,
        deaths: 0
      }
    }
    worldByDate[jsonDate].cases += objectEntry.cases
    worldByDate[jsonDate].deaths += objectEntry.deaths
  }

  // rearange the world as if it were a country
  let allDates = Object.keys(worldByDate)
  countries.WORLD = []
  for(let i=0; i<allDates.length; i++){
    let objectEntry = {
      date: allDates[i],
      cases: worldByDate[allDates[i]].cases,
      deaths: worldByDate[allDates[i]].deaths
    }
    countries.WORLD.push(objectEntry)
  }

  console.log(countries.CH)

  // Originally, the data is arranged from the newest to the oldest, we want the
  // opposite.
  let allCountryCodes = Object.keys(countries)
  for(let i=0; i<allCountryCodes.length; i++){
    countries[allCountryCodes[i]].sort((a, b) => {
      return a.date > b.date ? 1 : -1
    })
  }

  // fs.writeFileSync('data/covid19-per-country.json', JSON.stringify(countries , null, 2))
  let filename = `covid19-per-country-${day}-${month}-${year}.json`
  fs.writeFileSync(`../public/data/${filename}`, JSON.stringify(countries , null, 2))

  let configFileContent = {
    lastFile: filename,
    date: date
  }

  fs.writeFileSync('../public/data/config.json', JSON.stringify(configFileContent , null, 2))

  console.log('✅  JSON report ready!')
}


main()
