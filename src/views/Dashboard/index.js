import React from "react"
import 'chart.js'
// import { LineChart } from 'react-chartkick'
import { Line, Pie } from 'react-chartjs-2'
import './style.css'

import { countryCollection } from '../../core/Store'


class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

  }


  render(){
    let countryCode = this.props.countryCode
    let country = countryCollection.getCountry(countryCode)

    console.log(country)


    let casesSeries = country.getCasesSeries()
    let cumulatedCasesSeries = country.getCumulatedCasesSeries()
    let deathsSeries = country.getDeathsSeries()
    let cumulatedDeathsSeries = country.getCumulatedDeathsSeries()

    let casesSeriesPerMillion = country.getCasesSeriesPerMillion()
    let cumulatedCasesSeriesPerMillion = country.getCumulatedCasesSeriesPerMillion()
    let deathsSeriesPerMillion = country.getDeathsSeriesPerMillion()
    let cumulatedDeathsSeriesPerMillion = country.getCumulatedDeathsSeriesPerMillion()

    let numberOfRecords = Object.keys(casesSeries).length

    let topMessage = null
    let dataAge = 0
    if(numberOfRecords === 0){
      topMessage = (
        <div className="warning-message">
          ⚠️ There is no record for this country
        </div>
      )
    }else{
      dataAge = country.getDataAge()
      console.log('dataAge', dataAge)

      if(dataAge < 0.5){
        topMessage = (
          <div className="info-message">
            ✅ These numbers are fresh from the day
          </div>
        )
      }else if(dataAge >= 0.5 && dataAge <= 1){
        topMessage = (
          <div className="warning-message">
            ⚠️ These numbers are from yesterday, they may not reflect today's reality
          </div>
        )
      }else{
        topMessage = (
          <div className="warning-message">
            ⚠️ These numbers are from {~~dataAge} days ago, they may not reflect todays reality
          </div>
        )
      }
    }

    // example: https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
    let dataRegularSeries = {
      labels: Object.keys(casesSeries),
      datasets: [
        {
          label: 'COVID-19 cases',
          data: Object.values(casesSeries),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(255, 200, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(255, 200, 0, 1)',
        },
        {
          label: 'COVID-19 deaths',
          data: Object.values(deathsSeries),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(200, 0, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(200, 0, 0, 1)',
        }
      ]
    }



    let dataCumulatedSeries = {
      labels: Object.keys(casesSeries),
      datasets: [
        {
          label: 'COVID-19 cumulated cases',
          data: Object.values(cumulatedCasesSeries),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(255, 200, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(255, 200, 0, 1)',
        },
        {
          label: 'COVID-19 deaths',
          data: Object.values(cumulatedDeathsSeries),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(200, 0, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(200, 0, 0, 1)',
        }
      ]
    }


    let dataSeriesPerMillion = {
      labels: Object.keys(casesSeries),
      datasets: [
        {
          label: 'COVID-19 cases per million',
          data: Object.values(casesSeriesPerMillion),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(255, 200, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(255, 200, 0, 1)',
        },
        {
          label: 'COVID-19 deaths per million',
          data: Object.values(deathsSeriesPerMillion),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(200, 0, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(200, 0, 0, 1)',
        }
      ]
    }


    let dataCumulatedSeriesPerMillion = {
      labels: Object.keys(casesSeries),
      datasets: [
        {
          label: 'COVID-19 cumulated cases',
          data: Object.values(cumulatedCasesSeriesPerMillion),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(255, 200, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(255, 200, 0, 1)',
        },
        {
          label: 'COVID-19 deaths',
          data: Object.values(cumulatedDeathsSeriesPerMillion),
          fill: false,
          pointRadius: 1.7,
          pointHitRadius: 10,
          borderColor: 'rgba(200, 0, 0, 1)',
          lineTension: 0.2,
          backgroundColor: 'rgba(200, 0, 0, 1)',
        }
      ]
    }


    let logScale = {
      scales: {
        yAxes: [{
          type: 'logarithmic',
        }]
      }
    }


    let nbDayFixer = dataAge < 0.5 ? 0 : Math.ceil(dataAge)
    let casesIntheLast3Days = country.getCasesStartingNDaysAgoDuringMDays(2+nbDayFixer, 3)
    let casesInthe3DaysBefore = country.getCasesStartingNDaysAgoDuringMDays(5+nbDayFixer, 3)
    let casesEvolution = casesIntheLast3Days > casesInthe3DaysBefore ?
      <img className="evolution-arrow" src="images/arrow-red-up.png" title="Higher than the 3 previous days"/> :
      <img className="evolution-arrow" src="images/arrow-green-down.png" title="Lower than the previous 3 days"/>

    let deathsIntheLast3Days = country.getDeathsStartingNDaysAgoDuringMDays(2+nbDayFixer, 3)
    let deathsInthe3DaysBefore = country.getDeathsStartingNDaysAgoDuringMDays(5+nbDayFixer, 3)
    let deathsEvolution = deathsIntheLast3Days > deathsInthe3DaysBefore ?
      <img className="evolution-arrow" src="images/arrow-red-up.png" title="Higher than the 3 previous days"/> :
      <img className="evolution-arrow" src="images/arrow-green-down.png" title="Lower than the previous 3 days"/>

    console.log('deathsIntheLast3Days', deathsIntheLast3Days)
    console.log('deathsInthe3DaysBefore', deathsInthe3DaysBefore)

    let crudeDeathsPerDay = country.getCrudeDeathsPerDay()

    let crudeDeathsComp = null
    if(crudeDeathsPerDay){
      crudeDeathsComp = (
        <div className="crude-deaths-info">
          ℹ️ For comparison, in 2017, <span style={{textTransform: 'capitalize', fontWeight: 800}}>{country.name}</span> was counting an average of <span style={{fontWeight: 800}}>{crudeDeathsPerDay}</span> deaths per day <a style={{color: "#67abf3", textDecoration: 'none'}} href="https://www.cia.gov/library/publications/the-world-factbook/rankorder/2066rank.html">[source]</a>
        </div>
      )
    }

    let world = countryCollection.getCountry('world')
    let countryCasesLastDay = country.getCasesStartingNDaysAgoDuringMDays(nbDayFixer, 1)
    let countryDeathsLastDay = country.getDeathsStartingNDaysAgoDuringMDays(nbDayFixer, 1)
    let worldCasesLastDay = world.getCasesStartingNDaysAgoDuringMDays(nbDayFixer, 1)
    let worldDeathsLastDay = world.getDeathsStartingNDaysAgoDuringMDays(nbDayFixer, 1)


    let casePieChartData = {
      labels: [
        country.name,
        'World'
      ],
      datasets: [{
        data: [
          ~~((countryCasesLastDay / worldCasesLastDay)*1000)/1000,
          1 - (~~((countryCasesLastDay / worldCasesLastDay)*1000)/1000)
        ],
        backgroundColor: [
          '#ffc800',
          '#f0f0f0'
        ],
        hoverBackgroundColor: [
          '#edba00',
          '#dbdbdb',
        ],
        borderWidth: 0

      }]
    }


    let deathPieChartData = {
      labels: [
        country.name,
        'World'
      ],
      datasets: [{
        data: [
          ~~((countryDeathsLastDay / worldDeathsLastDay)*1000)/1000,
          1 - (~~((countryDeathsLastDay / worldDeathsLastDay)*1000)/1000)
        ],
        backgroundColor: [
          '#c80000',
          '#f0f0f0'
        ],
        hoverBackgroundColor: [
          '#a30202',
          '#f0f0f0',
        ],
        borderWidth: 0
      }]
    }


    return (
      <div className="dashboard">

        <div className="country-name">
          <img className="flag" src={`images/flags/${countryCode}.svg`}/>
          <h1>{country.name}</h1>
        </div>



        {topMessage}



        <div className="info-grid">

          <div className="cell">
            <div className="cell-inner" style={{float: 'right'}}>
              <p>
                <span className="cell-title" style={{color: '#ffc800'}}># cases</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">all time</span><br/>
                <span className="cell-score">{country.getCases()}</span>
                <br/>
                <span className="cell-raise">+{country.getCasesLastDayRaise()}% in the last day</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">all time per million</span><br/>
                <span className="cell-score">{~~(country.getCasesPerMillion() * 100) / 100}</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">in the last day</span><br/>
                <span className="cell-score">{countryCasesLastDay}</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">in the last 3 days</span><br/>
                <span className="cell-score">{casesIntheLast3Days}</span>{casesEvolution}
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">world proportion in last day</span><br/>
                <Pie data={casePieChartData} />
              </p>

            </div>
          </div>

          <div className="cell">
            <div className="cell-inner" style={{float: 'left'}}>
              <p>
                <span className="cell-title" style={{color: '#c80000'}}># deaths</span>
              </p>
              <p className="cell-section">
                <span className="cell-subtitle">all time</span><br/>
                <span className="cell-score">{country.getDeaths()}</span>
                <br/>
                <span className="cell-raise">+{country.getDeathsLastDayRaise()}% in the last day</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">all time per million</span><br/>
                <span className="cell-score">{~~(country.getDeathsPerMillion() * 100) / 100}</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">in the last day</span><br/>
                <span className="cell-score">{countryDeathsLastDay}</span>
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">in the last 3 days</span><br/>
                <span className="cell-score">{deathsIntheLast3Days}</span>{deathsEvolution}
              </p>

              <p className="cell-section">
                <span className="cell-subtitle">world proportion in last day</span><br/>
                <Pie data={deathPieChartData} />
              </p>
            </div>
          </div>


        </div>

        {crudeDeathsComp}

        <div className="plot-title">COVID-19 cases and deaths over time (linear scale)</div>
        <Line data={dataRegularSeries} options={{}} height={100}/>

        <div className="plot-title">COVID-19 cumulated cases and deaths over time (logarithmic scale)</div>
        <Line data={dataCumulatedSeries} options={logScale} height={100}/>

        <div className="plot-title">COVID-19 cases and deaths over time per million population (linear scale)</div>
        <Line data={dataSeriesPerMillion} options={{}} height={100}/>

        <div className="plot-title">COVID-19 cumulated cases and deaths over time per milion population (logarithmic scale)</div>
        <Line data={dataCumulatedSeriesPerMillion} options={logScale} height={100}/>

        <div className="credits">
        <p>
          Data from the <a href="https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide">European Centre for Disease Prevention and Control</a>
        </p>
          <p>
          — Made by <a href="https://twitter.com/jonathanlurie">@jonathanlurie</a> :: <a href="https://github.com/jonathanlurie/covid19dashboard">fork me on GitHub</a> —
          </p>
        </div>
      </div>
    )
  }
}

export default Dashboard
