import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NonAlcList from './Lists/NonAlcList'
import AlcList from './Lists/AlcList'
import NonAlcPage from './Pages/NonAlcPage'
import AlcDetails from './Pages/AlcPage'

const Main = () => {

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
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formState} />
                <button type='submit'>Submit</button>
            </form>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nonAlc' element={<NonAlcList/>}/>
            <Route path='/alc' element={<AlcList />} />
            <Route path='/nonAlc/:drinks' element={<NonAlcPage/>}/>
            <Route path='/alc/:id' element={<AlcDetails/>}/>
            </Routes>
        </div>
    )
}

export default Main