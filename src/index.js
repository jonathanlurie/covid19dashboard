import React from 'react'
import ReactDOM from 'react-dom'
import loadData from './core/loadData'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'


async function init(){
  // first; lets fetch data
  console.log('loading data...');
  await loadData()
  console.log('done loading data')

  ReactDOM.render(<App />, document.getElementById('root'))

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister()
}

init()
