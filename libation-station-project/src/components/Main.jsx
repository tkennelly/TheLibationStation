import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NonAlcList from './Lists/NonAlcList'

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nonAlc' element={<NonAlcList/>}/>
            
            
        
        </Routes>
    )
}

export default Main