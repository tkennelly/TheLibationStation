
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import DrinkList from './Lists/DrinkList'

const Nav = () => {
    
    const [formState, setFormState] = useState('')
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        
    }
    return (
        <div className='nav'>
            <form onSubmit={handleSubmit}>
                <input type="text" id='search' onChange={handleChange} value={formState.search}/>
                <button type='submit'>Submit</button>
            </form>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/drinks'>All Drinks</Link>
            <Link className='link' to='/alc'>Alcoholic Drinks</Link>
            <Link className='link' to='/nonAlc'>NonAlcoholic Drinks</Link>
            <Routes>
                <Route path='/drinks' element={<DrinkList handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>}/>
            </Routes>

        </div>
    )
}

export default Nav