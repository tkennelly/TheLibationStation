import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'

const Main = () => {
    const [drinks, setDrinks] = useState([])
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Main