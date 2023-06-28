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
      <p>Ingredients: <br/>{drinkDetails.strIngredient1} <br/>{drinkDetails.strIngredient2} <br/>{drinkDetails.strIngredient3} <br/>{drinkDetails.strIngredient4} <br/>{drinkDetails.strIngredient5} <br/>{drinkDetails.strIngredient6} <br/>{drinkDetails.strIngredient7}</p>
      <p>Glass: {drinkDetails.strGlass}</p>
      <p>Instructions: {drinkDetails.strInstructions}</p>
      <Link to="/nonAlc">Return to Non-Alcoholic Drink List</Link>
    </div>
  )
}

export default NonAlcPage