import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from "react-router-dom"

const AlcList = () => {

    const [alcs, setAlcs] = useState()

    useEffect(()=>{
        const getAlcs = async() => {
          const response = await axios.get(`${BASE_URL}/list.php?i=list`)
          setAlcs(response.data.drinks)
          console.log(response)
        }
        getAlcs()
      },[])

      let navigate = useNavigate()

      const showAlc = (key) => {
        navigate(`${key}`)
      }
      
      return alcs ?(
        <div className="alc">
          <h2>List of Ingredients</h2>
          {
            alcs.map((alc, key) => (
              <div key={key} onClick={()=>showAlc(key)} className="alc-name">
                <h3>{alc.strIngredient}</h3>
              </div>
            ))
          }
        </div>
      ) : <h3> Finding all alcohols... </h3>
      }

export default AlcList