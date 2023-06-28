import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import NonAlcList from '../Lists/NonAlcList';
import { BASE_URL } from '../../globals'



const NonAlcPage = () => {
  let location = useLocation()
  let nonAlc = location.state.nonAlc

const [drinkDetails, setDrinkDetails] = useState('')

useEffect(() => {
    const getDrinkDetails = async () => {
        const response  = await axios.get(`${BASE_URL}/Search.php?s=${nonAlc.strDrink}`)
        console.log(response)
        setDrinkDetails(response.data.drinks)
    }
    getDrinkDetails()
},[])

  if (!drinkDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{nonAlc.strDrink}</h2>
      <img>{nonAlc.strDrinkThumb}</img>
      <p>Ingredients: \n{nonAlc.strIngredient1} \n{nonAlc.strIngredient2} \n{nonAlc.strIngredient3} \n{nonAlc.strIngredient4} \n{nonAlc.strIngredient5} \n{nonAlc.strIngredient6} \n{nonAlc.strIngredient7}</p>
      <p>Glass: {nonAlc.strGlass}</p>
      <p>Instructions: {nonAlc.strInstructions}</p>
      <Link to="/nonAlc">Return to Non-Alcoholic Drink List</Link>
    </div>
  )
}

export default NonAlcPage