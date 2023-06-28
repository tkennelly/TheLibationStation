import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DrinkPage({ drinks }){
    const [drink, setDrink] = useState('')
    let { strDrink } = useParams()

    useEffect(()=>{
        let selectedDrink = drinks.find(drink=>drink.strDrink === strDrink)
        setDrink(selectedDrink)
    },[drink.strDrink, strDrink])
    return(
        <div className='details'>
            <h1>{drink.strDrink}</h1>
            <img className='details-item-img' src={drink.strDrinkThumb} alt="image of drink" />
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
        </div>
    )
}