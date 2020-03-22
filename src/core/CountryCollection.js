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

  getAllCountries(){
    let countries = Object.values(this.collection)
    let sorted = countries.sort((a, b) => a.name < b.name ? -1 : 1)
    return sorted
  }
}


export default CountryCollection
