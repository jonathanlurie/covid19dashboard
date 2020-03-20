const MILLION = 1000000

class Country {

  constructor(code, name){
    this.code = code
    this.name = name
    this.recordSeries = []
    this.population = null
  }

  setRecordSeries(rs){
    this.recordSeries = rs
    // making actual date objects
    for(let i=0; i<this.recordSeries.length; i++){
      this.recordSeries[i].date = new Date(this.recordSeries[i].date)
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

  getCasesPerMillion(){
    return this.getCases() / (this.population / MILLION)
  }

  getDeathsPerMillion(){
    return this.getDeaths() / (this.population / MILLION)
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

    console.log('nDaysAgo', nDaysAgo.toUTCString())
    console.log('mDaysAfter', mDaysAfter.toUTCString())

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

      console.log('nDaysAgo', nDaysAgo.toUTCString())
      console.log('mDaysAfter', mDaysAfter.toUTCString())

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




  // TODO:
  // - same but per million
  // - getDeathsSeries and getCasesSeries CUMULATED


}

export default Country
