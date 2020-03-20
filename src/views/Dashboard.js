import React from "react"
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { countryCollection } from '../core/Store'


class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    let countryCode = this.props.countryCode
    let country = countryCollection.getCountry(countryCode)

    let data = [
      {"name":"Cases", "data": country.getCasesSeries()},
      {"name":"Deaths", "data": country.getDeathsSeries()}
    ]

// and

    return (
      <div>
        <div style={{'textTransform': 'capitalize'}}>{country.name}</div>
        <LineChart data={data} />
      </div>
    )
  }
}

export default Dashboard
