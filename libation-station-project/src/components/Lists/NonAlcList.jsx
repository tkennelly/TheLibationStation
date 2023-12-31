import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../../globals'

const NonAlcList = () => {
    const [nonAlc, setNonAlc] = useState([])

    useEffect(() => {
        const getNonAlc = async () => {
            const response  = await axios.get(`${BASE_URL}/filter.php?a=Non_Alcoholic`)
            console.log(response)
            setNonAlc(response.data.drinks)
        }
        getNonAlc()
    },[])

    let navigate = useNavigate();

    const showNonAlcDrink = (nonAlc) => {
      navigate(`${nonAlc.strDrink}`, {state: {nonAlc:nonAlc}});
    };

    return (
      <div className="nonAlc">
        {nonAlc.map((nonAlc, i) => (
          <div key={i} onClick={() => showNonAlcDrink(nonAlc)} className="list-item">
            <h2>{nonAlc.strDrink}</h2>
            <img src={nonAlc.strDrinkThumb} alt="img" className='list-item-img'/>
          </div>
        ))}
      </div>
    );
}

export default NonAlcList