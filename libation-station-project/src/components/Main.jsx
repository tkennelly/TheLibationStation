import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import DrinkList from './Lists/DrinkList'
import DrinkPage from './Pages/DrinkPage'

const Main = () => {
    const [drinks, setDrinks] = useState([])
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/drinks' element={<DrinkList drinks={drinks} setDrinks={setDrinks}/>}/>
            <Route path='/drinks/:strDrink' element={<DrinkPage drinks={drinks} setDrinks={setDrinks}/>}/>
        </Routes>
    )
}

export default Main