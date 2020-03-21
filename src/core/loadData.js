import Country from './Country'
import { countryCollection } from './Store'


async function loadData(){
  // loading country names and abbreviations
  let countryByAbreviationRes = await fetch('./data/country-by-abbreviation.json')
  let countryByAbreviation = await countryByAbreviationRes.json()

  // load population
  let countryPopulationRes = await fetch('./data/country-by-population.json')
  let countryPopulation = await countryPopulationRes.json()
  let countryPopulationMap = {}
  countryPopulation.forEach(c => {
    countryPopulationMap[c.country.toLowerCase()] = parseInt(c.population) || null
  })

  // load covid-19 cases
  let date = new Date()
  let day = date.getUTCDate()
  day = day < 10 ? `0${day}` : `${day}`
  let month = date.getUTCMonth() + 1
  month = month < 10 ? `0${month}` : `${month}`
  let year = `${date.getUTCFullYear()}`
  let covid19Res = await fetch(`./data/covid19-per-country-${day}-${month}-${year}.json`)
  let covid19 = await covid19Res.json()

  for(let c=0; c<countryByAbreviation.length; c++){
    let countryName = countryByAbreviation[c].country.toLowerCase()
    let countryAbbr = countryByAbreviation[c].abbreviation.toLowerCase()
    let population = countryPopulationMap[countryName]

    let country = new Country(countryAbbr, countryName)
    country.population = population

    if(countryAbbr.toUpperCase() in covid19){
      country.setRecordSeries(covid19[countryAbbr.toUpperCase()])
    }

    countryCollection.addCountry(country)
  }

  console.log(countryCollection.getAllCountries());

  console.log('France', countryCollection.getCountry('fr'))
}

export default loadData
