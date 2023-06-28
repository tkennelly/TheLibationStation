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
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/alc'>Alcoholic Drinks</Link>
            <Link className='link' to='/nonAlc'>Non-Alcoholic Drinks</Link>
            <form onSubmit={handleSubmit}>
                <input type="text" id='search' onChange={handleChange} value={formState.search} placeholder='Search for your favorite cock'/>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </div>
    )
}

export default Nav