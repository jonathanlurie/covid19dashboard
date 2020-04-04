const MILLION = 1000000

class Country {

  constructor(code, name){
    this.code = code
    this.name = name
    this.recordSeries = []
    this.population = null
    this.mortalityRate = null
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16)

    this.rawCasesSeries = []
    this.rawDeathsSeries = []
    this.rawDateSeries = []
  }


  hasRecord(){
    return this.recordSeries.length > 0
  }


  setRecordSeries(rs){
    this.recordSeries = rs
    // making actual date objects
    for(let i=0; i<this.recordSeries.length; i++){
      this.recordSeries[i].date = new Date(this.recordSeries[i].date)
      this.rawCasesSeries.push(this.recordSeries[i].deaths)
      this.rawDeathsSeries.push(this.recordSeries[i].cases)
      this.rawDateSeries.push(this.recordSeries[i].date)
    }
  }


  getCases(){
    let total = 0
    for(let i=0; i<this.recordSeries.length; i++){
      total += this.recordSeries[i].cases
    }
    return total
  }


  getDeaths(){
    let total = 0
    for(let i=0; i<this.recordSeries.length; i++){
      total += this.recordSeries[i].deaths
    }
    return total
  }


  getCrudeDeathsPerDay(){
    if(this.mortalityRate === null){
      return null
    }

    return ~~(this.population * this.mortalityRate / 1000 / 365.25)
  }

  getCasesPerMillion(){
    return this.getCases() / (this.population / MILLION)
  }


  getDeathsPerMillion(){
    return this.getDeaths() / (this.population / MILLION)
  }


  // chec
  // k if the last date available corresponds to the
  getDataAge(){
    let lastRecordDate = this.recordSeries[this.recordSeries.length - 1].date
    let todayAtNoon = new Date()
    todayAtNoon.setUTCHours(12, 0, 0, 0)
    let deltaDays = (todayAtNoon - lastRecordDate) / (24 * 3600 * 1000)
    return deltaDays
  }



  // n days ago start n days ago very early at the morning (1 sec after midnight)
  // and n days after is also  very early at the morning (1 sec after midnight)
  // example: "today" is n=0 m=1
  //          "yesterday" is n=1 m=1
  //          "since yesterday morning" is n=1 m=2
  getCasesStartingNDaysAgoDuringMDays(n, m){
    let nDaysAgo = new Date(Date.now() - n * 1000 * 3600 * 24)
    // set it to UTC early morning (1 sec after midnight)
    nDaysAgo.setUTCHours(0, 0, 1, 0)
    let mDaysAfter = new Date(nDaysAgo.getTime() + m * 1000 * 3600 * 24)
    // mDaysAfter.setUTCHours(23, 59, 59, 0)

    let total = 0
    for(let i=this.recordSeries.length - 1; i>=0; i--){
      let r = this.recordSeries[i]
      if(r.date > nDaysAgo && r.date < mDaysAfter){
        total += r.cases
      }
    }
    return total
  }


    // n days ago start n days ago very early at the morning (1 sec after midnight)
    // and n days after is also  very early at the morning (1 sec after midnight)
    getDeathsStartingNDaysAgoDuringMDays(n, m){
      let nDaysAgo = new Date(Date.now() - n * 1000 * 3600 * 24)
      // set it to UTC early morning (1 sec after midnight)
      nDaysAgo.setUTCHours(0, 0, 1, 0)
      let mDaysAfter = new Date(nDaysAgo.getTime() + m * 1000 * 3600 * 24)
      // mDaysAfter.setUTCHours(23, 59, 59, 0)

      let total = 0
      for(let i=this.recordSeries.length - 1; i>=0; i--){
        let r = this.recordSeries[i]
        if(r.date > nDaysAgo && r.date < mDaysAfter){
          total += r.deaths
        }
      }
      return total
    }

    getCasesSeries(){
      // key is date such as yyyy-mm-dd
      let series = {}

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = r.cases
      }
      return series
    }

    getCasesSeriesPerMillion(){
      // key is date such as yyyy-mm-dd
      let series = {}

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = r.cases / (this.population / MILLION)
      }
      return series
    }


    getCumulatedCasesSeries(){
      // key is date such as yyyy-mm-dd
      let series = {}
      let total = 0

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        total += r.cases
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = total
      }
      return series
    }


    getCumulatedCasesSeriesPerMillion(){
      // key is date such as yyyy-mm-dd
      let series = {}
      let total = 0

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        total += r.cases
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = total / (this.population / MILLION)
      }
      return series
    }


    getDeathsSeries(){
      // key is date such as yyyy-mm-dd
      let series = {}

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = r.deaths
      }
      return series
    }

    getDeathsSeriesPerMillion(){
      // key is date such as yyyy-mm-dd
      let series = {}

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = r.deaths / (this.population / MILLION)
      }
      return series
    }

    getCumulatedDeathsSeries(){
      // key is date such as yyyy-mm-dd
      let series = {}
      let total = 0

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        total += r.deaths
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = total
      }
      return series
    }

    getCumulatedDeathsSeriesPerMillion(){
      // key is date such as yyyy-mm-dd
      let series = {}
      let total = 0

      for(let i=0; i<this.recordSeries.length; i++){
        let r = this.recordSeries[i]
        total += r.deaths
        let year = r.date.getUTCFullYear()
        let month = r.date.getUTCMonth() + 1
        month = month < 10 ? `0${month}` : month
        let day = r.date.getUTCDate()
        day = day < 10 ? `0${day}` : day
        let key = `${year}-${month}-${day}`
        series[key] = total / (this.population / MILLION)
      }
      return series
    }

}

export default Country
