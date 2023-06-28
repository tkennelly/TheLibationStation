import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home'
import DrinkList from './Lists/DrinkList'
import DrinkPage from './Pages/DrinkPage'
import NonAlcList from './Lists/NonAlcList'
import AlcList from './Lists/AlcList'
import NonAlcPage from './Pages/NonAlcPage'
import AlcDetails from './Pages/AlcPage'

const Main = () => {

    const [drinks, setDrinks] = useState([])
    const [formState, setFormState] = useState('')
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        setFormState('')
    }

    return (
        <div>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/drinks' element={<DrinkList drinks={drinks} setDrinks={setDrinks} formState={formState} />} />
            <Route path='/drinks/:strDrink' element={<DrinkPage drinks={drinks} />} />
            <Route path='/nonAlc' element={<NonAlcList/>}/>
            <Route path='/alc' element={<AlcList />} />
            <Route path='/nonAlc/:drinks' element={<NonAlcPage/>}/>
            <Route path='/alc/:id' element={<AlcDetails/>}/>
            </Routes>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formState} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Main