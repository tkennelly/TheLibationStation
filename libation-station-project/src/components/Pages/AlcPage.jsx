import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const AlcDetails = () => {

    
    const [alc, setAlc] = useState()
    
    let {id} = useParams()

    useEffect(()=>{
    const getAlc = async() => {
        const response = await axios.get(`${BASE_URL}/filter.php?i=`)
        setAlc(response.data.drinks[id])
    }
    getAlc()
    },[])

    console.log(alc)
    return alc ? (
    <div className="alc-detail">
        <h2>Drink: {alc.strDrink[id]}</h2>

        <Link to="/alcohols"> Return to ingredient list</Link>
    </div>
    ) : <h3>Finding drinks...</h3>
}

export default AlcDetails