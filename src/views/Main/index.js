import React from "react"
import {
  Redirect
} from "react-router-dom"
import { countryCollection, config } from '../../core/Store'
import Dashboard from '../Dashboard'
import DashboardWorld from '../DashboardWorld'
import CountryList from '../CountryList'
import './style.css'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    // let { countryCode } = useParams()
    let countryCode = this.props.match.params.countryCode

    if(!countryCode){
      return <Redirect to={config.defaultCountryCode} />
    }

    let hasCountry = countryCollection.hasCountry(countryCode)

    if(!hasCountry){
      alert('There is no data for this country.')
    }

    let dashboardComp = countryCode === 'world' ? <DashboardWorld /> : <Dashboard countryCode={countryCode}/>


    return (
      <div className="main">
        <CountryList />
        {dashboardComp}
      </div>
    )
  }
}

export default Main
