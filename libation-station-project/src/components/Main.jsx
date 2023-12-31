import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home'
import DrinkList from './Lists/DrinkList'
import DrinkPage from './Pages/DrinkPage'
import NonAlcList from './Lists/NonAlcList'
import AlcList from './Lists/AlcList'
import NonAlcPage from './Pages/NonAlcPage'
import AlcDetails from './Pages/AlcPage'

const Main = ({ formState }) => {

    const [drinks, setDrinks] = useState([])

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/drinks/:strDrink' element={<DrinkPage drinks={drinks} />} />
                <Route path='/alc' element={<AlcList />} />
                <Route path='/nonAlc/:drinks' element={<NonAlcPage/>}/>
                <Route path='/alc/:name' element={<AlcDetails/>}/>
                <Route path='/nonAlc' element={<NonAlcList/>}/>
            </Routes>
            <div className='container'>
                <Routes>
                    <Route path='/drinks' element={<DrinkList drinks={drinks} setDrinks={setDrinks} value={formState.search}/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Main