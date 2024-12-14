import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component-1'
import Componentt from './components/component-2'
import StateComponent from './components/stateComponent/StateComponent'
import Form from './components/stateComponent/Form/Form'
import Reminder from './Components_for_reminder_p/Reminder'

function App() {
  return (
    <>
      {/* <Component data='one' />
      <Componentt data='two'/>
      <StateComponent/> */}
      {/* <Form/> */}
      <Reminder/>
      
    </>
  )
}

export default App
