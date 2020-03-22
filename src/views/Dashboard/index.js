import React from "react"
import 'chart.js'
// import { LineChart } from 'react-chartkick'
import { Line } from 'react-chartjs-2'
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


    let casesSeries = country.getCasesSeries()
    let cumulatedCasesSeries = country.getCumulatedCasesSeries()
    let deathsSeries = country.getDeathsSeries()
    let cumulatedDeathsSeries = country.getCumulatedDeathsSeries()

    let casesSeriesPerMillion = country.getCasesSeriesPerMillion()
    let cumulatedCasesSeriesPerMillion = country.getCumulatedCasesSeriesPerMillion()
    let deathsSeriesPerMillion = country.getDeathsSeriesPerMillion()
    let cumulatedDeathsSeriesPerMillion = country.getCumulatedDeathsSeriesPerMillion()


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

    return (
      <div className="dashboard">

        <div className="country-name">
          <img className="flag" src={`images/flags/${countryCode}.svg`}/>
          <h1>{country.name}</h1>
        </div>

        <div className="plot-title">COVID-19 cases and deaths over time (linear scale)</div>
        <Line data={dataRegularSeries} options={{}} height={100}/>

        <div className="plot-title">COVID-19 cumulated cases and deaths over time (logarithmic scale)</div>
        <Line data={dataCumulatedSeries} options={logScale} height={100}/>

        <div className="plot-title">COVID-19 cases and deaths over time per million population (linear scale)</div>
        <Line data={dataSeriesPerMillion} options={{}} height={100}/>

        <div className="plot-title">COVID-19 cumulated cases and deaths over time per milion poplation (logarithmic scale)</div>
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
