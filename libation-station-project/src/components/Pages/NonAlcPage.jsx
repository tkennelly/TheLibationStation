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
        const response  = await axios.get(`${BASE_URL}/search.php?s=${nonAlc.strDrink}`)
        console.log(response)
        setDrinkDetails(response.data.drinks[0])
    }
    getDrinkDetails()
},[])

  if (!drinkDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{drinkDetails.strDrink}</h2>
      <img src={drinkDetails.strDrinkThumb}/>
      <p>Ingredients: \n{drinkDetails.strIngredient1} \n{drinkDetails.strIngredient2} \n{drinkDetails.strIngredient3} \n{drinkDetails.strIngredient4} \n{drinkDetails.strIngredient5} \n{drinkDetails.strIngredient6} \n{drinkDetails.strIngredient7}</p>
      <p>Glass: {drinkDetails.strGlass}</p>
      <p>Instructions: {drinkDetails.strInstructions}</p>
      <Link to="/nonAlc">Return to Non-Alcoholic Drink List</Link>
    </div>
  )
}

export default NonAlcPage