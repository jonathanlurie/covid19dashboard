const fetch = require('node-fetch')
const xlsx = require('node-xlsx')
const fs = require('fs')

async function main(){
  // https://www.ecdc.europa.eu/sites/default/files/documents/COVID-19-geographic-disbtribution-worldwide-2020-03-18.xls
  let date = new Date()
  let day = date.getDate()
  day = day < 10 ? `0${day}` : `${day}`
  let month = date.getMonth() + 1
  month = month < 10 ? `0${month}` : `${month}`
  let year = `${date.getFullYear()}`

  let reportUrl = `https://www.ecdc.europa.eu/sites/default/files/documents/COVID-19-geographic-disbtribution-worldwide-${year}-${month}-${day}.xlsx`
  // sometimes, the file is saved as xls, sometimes as xlsx
  let reportUrlFallback = `https://www.ecdc.europa.eu/sites/default/files/documents/COVID-19-geographic-disbtribution-worldwide-${year}-${month}-${day}.xls`


  let reportRes = await fetch(reportUrl)

  if(reportRes.status > 200){
    reportRes = await fetch(reportUrlFallback)
  }

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

  // arrange the data per country
  for(let i=1; i<data.length; i++){
    let entry = data[i]
    let countryCode = entry[7]

    // date is UTC at noon
    let recordDate = new Date()
    recordDate.setUTCFullYear(entry[3])
    recordDate.setUTCMonth(entry[2]-1)
    recordDate.setUTCDate(entry[1])
    recordDate.setUTCHours(12, 0, 0, 0)

    let objectEntry = {
      date: recordDate,
      cases: entry[4],
      deaths: entry[5]
    }

    if(!(countryCode in countries)){
      countries[countryCode] = []
    }

    countries[countryCode].push(objectEntry)
  }

  // Originally, the data is arranged from the newest to the oldest, we want the
  // opposite.
  let allCountryCodes = Object.keys(countries)
  for(let i=0; i<allCountryCodes.length; i++){
    countries[allCountryCodes[i]].sort((a, b) => {
      return a.date > b.date ? 1 : -1
    })
  }

  // fs.writeFileSync('data/covid19-per-country.json', JSON.stringify(countries , null, 2))
  fs.writeFileSync('../public/data/covid19-per-country.json', JSON.stringify(countries , null, 2))

  console.log('✅  JSON report ready!')
}


main()
