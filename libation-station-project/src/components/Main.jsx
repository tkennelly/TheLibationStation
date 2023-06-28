import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NonAlcList from './Lists/NonAlcList'
import AlcList from './Lists/AlcList'
import NonAlcPage from './Pages/NonAlcPage'
import AlcDetails from './Pages/AlcPage'

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nonAlc' element={<NonAlcList/>}/>
            <Route path='/alc' element={<AlcList />} />
            <Route path='/nonAlc:drinks' element={<NonAlcPage/>}/>
            <Route path='/alc:id' element={<AlcDetails/>}/>
        
        </Routes>
    )
}

export default Main