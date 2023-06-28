import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'



const App = () => {
  const [formState, setFormState] = useState({search:''})
  const handleChange = event => {
      setFormState({ ...formState, [event.target.id]: event.target.value })
      console.log(formState['search'])
  }

  const handleSubmit = event => {
      event.preventDefault()
  }
  return (
    <div>
      <Header formState={formState} handleChange={handleChange}/>
      <Main formState={formState}/>
    </div>
  )
}

export default App
