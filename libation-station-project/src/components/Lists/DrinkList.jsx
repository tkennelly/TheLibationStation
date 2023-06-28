import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../globals'
import axios from 'axios'
import input from '../Nav'

export default function DrinkList({ drinks,setDrinks }){
    let navigate = useNavigate()
    const showDrink = (drink) => {
        navigate(drink.strDrink)
    }
    useEffect(()=>{
        const getAllDrinks = async() => {
            let response = await axios.get(`${BASE_URL}/search.php?f=a&f=b&f=c&f=d&f=e&f=f&f=g&f=h&f=i&f=j&f=k&f=l&f=m&f=n&f=o&f=p&f=q&f=r`)
            setDrinks(response.data.drinks)
            console.log(response.data.drinks)
        }
        getAllDrinks()
    },[])
    return (
        <div className='allDrinks'>
            {drinks.map(drink=>(
                (input === drink.strDrink || input === drink.strIngredient1) ?
                <div key={drink.strDrink} className='list-item' onClick={()=>(showDrink(drink))}>
                    <h2>{drink.strDrink}</h2>
                    <img className='list-item-img' src={drink.strDrinkThumb} alt="image of drink" />
                </div> : <h2></h2>
            ))}
        </div>
    )
}