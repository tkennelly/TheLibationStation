import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const AlcDetails = () => {

    
    const [alc, setAlc] = useState()
    
    let {name} = useParams()

    useEffect(()=>{
    const getAlc = async() => {
        const response = await axios.get(`${BASE_URL}/filter.php?i=${name}`)
        console.log(response.data.drinks)
        setAlc(response.data.drinks)
    }
    getAlc()
    },[])

    console.log(alc)
    return alc ? (
    <div className="details alc-drinks-list">
        <h2>List of Drinks:</h2>
        {
        alc.map((drink) => (
            <h2>Drink: {drink.strDrink}</h2>
        ))
      }
        <Link to="/alc"> Return to ingredient list</Link>
    </div>
    ) : <h3>Finding drinks...</h3>
}

export default AlcDetails