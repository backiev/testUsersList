// import { useState } from 'react'
import './App.css'
import './styles/main.sass'
import {Lists} from './components/Lists'
import {UserInfo} from './components/UserInfo'


function App() {

  return (
    <div className='wrapper'>
      <Lists />
      <UserInfo />
    </div>
  )
}

export default App
