import React from "react"
import {
  Redirect
} from "react-router-dom"
import { countryCollection, config } from '../../core/Store'
import Dashboard from '../Dashboard'
import CountryList from '../CountryList'
import './style.css'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    console.log(countryCollection)
  }

  render(){
    console.log('dfghjk');
    // let { countryCode } = useParams()
    let countryCode = this.props.match.params.countryCode

    if(!countryCode){
      return <Redirect to={config.defaultCountryCode} />
    }

    let hasCountry = countryCollection.hasCountry(countryCode)

    if(!hasCountry){
      alert('There is no data for this country.')
    }


    return (
      <div className="main">
        <CountryList />
        <Dashboard countryCode={countryCode}/>
      </div>
    )
  }
}

export default Main
