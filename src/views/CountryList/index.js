import React from 'react'
import {
  Link
} from "react-router-dom";
import { countryCollection } from '../../core/Store'
import './style.css'

class CountryList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countrySearch: ''
    }

    this.fullCountryList = countryCollection.getAllCountries()
  }

  render(){

    let countries = this.fullCountryList

    if(this.state.countrySearch !== ''){
      countries = countries.filter(c => {
        return c.name.includes(this.state.countrySearch)
      })
    }

    let countryList = countries.map(c => {
      let flagPath = `images/flags/${c.code}.svg`
      return (
        <li key={c.code}>
        <img className="flag" src={flagPath}/>
        <span className="country-name"><Link to={c.code}>{c.name}</Link></span>

        </li>
      )
    })

    return (
      <div className="country-list">
        <div className="title">
          COVID-19<br/>
          dashboard
        </div>
        <div className="container">
          <input className="searchbar" placeholder="Type a country..." onChange={(e) => {this.setState({countrySearch: e.target.value})}}/>
          <ul>
            {countryList}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountryList
