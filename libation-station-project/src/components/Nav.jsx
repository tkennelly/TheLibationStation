import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import DrinkList from './Lists/DrinkList'

const Nav = ({ formState,handleChange }) => {
    let navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate('/drinks')
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

        </div>
    )
}

export default Nav