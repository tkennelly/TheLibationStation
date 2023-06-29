import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../globals'
import axios from 'axios'

export default function DrinkList({ drinks,setDrinks,value }){
    let navigate = useNavigate()
    const showDrink = (drink) => {
        navigate(drink.strDrink)
    }
    useEffect(()=>{
        const getAllDrinks = async() => {
            let response = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
            setDrinks(response.data.drinks)
            console.log(response.data.drinks)
        }
        getAllDrinks()
    },[value])

    return drinks ? (drinks.map(drink=>{
        console.log(value, drink.strDrink)
        // if (value === drink.strDrink || value === drink.strIngredient1){
            return (<div key={drink.strDrink} className='list-item' onClick={()=>(showDrink(drink))}>
            <h2>{drink.strDrink}</h2>
            <img className='list-item-img' src={drink.strDrinkThumb} alt="image of drink" />
            <p className='alcoholic-designation'>{drink.strAlcoholic}</p>
            <p>In a {drink.strGlass}</p>
            <h3>Recipe:</h3>
                <p>{drink.strMeasure1} of {drink.strIngredient1}</p>
                <p>{drink.strMeasure2} of {drink.strIngredient2}</p>
                <p>{drink.strMeasure3} of {drink.strIngredient3}</p>
                <p>{drink.strMeasure4} of {drink.strIngredient4}</p>
                <p>{drink.strMeasure5} of {drink.strIngredient5}</p>
            <h3>Instructions: </h3>
            <p>{drink.strInstructions}</p>
            </div>)
        }
    // }
    )
    )
     : <div>This is loading...</div>

}
