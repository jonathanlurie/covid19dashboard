import React from "react"
import { countryCollection } from '../../core/Store'
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
    // let { countryCode } = useParams()
    let countryCode = this.props.match.params.countryCode
    let hasCountry = countryCollection.hasCountry(countryCode)

    if(!hasCountry){
      return (
        <div>The country code {countryCode} has no data.</div>
      )
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
