class CountryCollection {

  constructor(){
    this.collection = {}
  }

  addCountry(c){
    this.collection[c.code] = c
  }

  getCountry(code){
    if(code in this.collection){
      return this.collection[code]
    }else{
      return null
    }
  }

  hasCountry(code){
    return (code.toLowerCase() in this.collection)
  }


  getAllCountries(includeNoRecord=false){
    let countries = Object.values(this.collection)
    countries = countries.filter(c => c.code !== 'world' )
    // removes the one without actual data
    if(!includeNoRecord){
      countries = countries.filter(c => c.hasRecord())
    }

    countries = countries.sort((a, b) => a.name < b.name ? -1 : 1)
    return countries
  }



  getCountryNames(includeNoRecord=false){
    let names = this.getAllCountries(includeNoRecord)
      .map(c => c.name)
    return names
  }


  getCountryColors(includeNoRecord=false){
    let colors = this.getAllCountries(includeNoRecord)
      .map(c => c.color)
    return colors
  }


  // get the total cases
  getCountryCases(includeNoRecord=false){
    let cases = this.getAllCountries(includeNoRecord)
      .map(c => c.getCases())
    return cases
  }


  // get the total deaths
  getCountryDeaths(includeNoRecord=false){
    let deaths = this.getAllCountries(includeNoRecord)
      .map(c => c.getDeaths())
    return deaths
  }

  // get the total cases per million
  getCountryCasesPerMillion(includeNoRecord=false){
    let cases = this.getAllCountries(includeNoRecord)
      .map(c => c.getCasesPerMillion())
    return cases
  }


  // get the total deaths per million
  getCountryDeathsPerMillion(includeNoRecord=false){
    let deaths = this.getAllCountries(includeNoRecord)
      .map(c => c.getDeathsPerMillion())
    return deaths
  }

  getCountryCasesStartingNDaysAgoDuringMDays(n, m, includeNoRecord=false){
    let cases = this.getAllCountries(includeNoRecord)
      .map(c => c.getCasesStartingNDaysAgoDuringMDays(n, m))
    return cases
  }


  getCountryDeathsStartingNDaysAgoDuringMDays(n, m, includeNoRecord=false){
    let deaths = this.getAllCountries(includeNoRecord)
      .map(c => c.getDeathsStartingNDaysAgoDuringMDays(n, m))
    return deaths
  }


  // {
  //   order: 'asc', // can be 'desc'
  //   propToExtract: 'name', // can be another prop of Country or even a function of it
  //   propToSortOn: null,  // null means sorting on the extracted prop. Can be a prop of Country (but not a function)
  //   args: [], // arguments to give if propToExtract is a function
  //   includeNoRecord: false, // if true, then it will include the countries with no covid record
  // }
  getCountrySortedBy(options){
    let order = 'order' in options ? options.order : 'asc'
    let orderValue = order === 'asc' ? 1 : -1
    let propToExtract = 'propToExtract' in options ? options.propToExtract : 'name'
    let propToSortOn = 'propToSortOn' in options ? options.propToSortOn : null // default is to sort on the extracted prop
    let args = 'args' in  options ? options.args : []
    let includeNoRecord = 'includeNoRecord' in options ? options.includeNoRecord : false

    let countries = Object.values(this.collection)
    // console.log('DEBUG01', countries)
    // remove world
    countries = countries.filter(c => c.code !== 'world' )
    // console.log('DEBUG02', countries)
    // removes the one without actual data
    if(!includeNoRecord){
      countries = countries.filter(c => c.hasRecord())
    }

    // console.log('DEBUG03', countries)
    // getting the value
    countries = countries.map(c => {
      let obj = {
        country: c,
        propertyName: propToExtract,
        value: null
      }

      if(propToExtract in c){
        if(typeof c[propToExtract] === 'function'){
          obj.value = c[propToExtract](...args)
        }else{
          obj.value = c[propToExtract]
        }
      }
      return obj
    })

    // console.log('DEBUG04', countries)

    // sorting by this value
    if(propToSortOn === null){
      countries = countries.sort((a, b) => a.value < b.value ? -1 * orderValue : 1 * orderValue)
    }else{
      countries = countries.sort((a, b) => a.country[propToExtract] < b.country[propToExtract] ? -1 * orderValue : 1 * orderValue)
    }
    // console.log('DEBUG05', countries)
    return countries
  }

}


export default CountryCollection
