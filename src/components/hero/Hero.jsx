import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {getHeroById} from "../../helpers/getHeroById";


export const Hero = () => {

  const navigate = useNavigate();

  const {heroeId} = useParams();

//useMemo hace que solo se dispare la funcion cuando cambie la dependencia
  const hero = useMemo(()=>getHeroById (heroeId) ,[heroeId]) ;

  //si no existe ningun hero se retorna a la pag principal
  if(!hero){
    return <Navigate to="/"/>
  }

  const handleReturn = () => {
    navigate(-1)
  }


  return (
    <div className="row">
      <div className="col-4">
        <img src={`/assets/${hero.id}.jpg`} className="img-thumbnail animate__animated animate__fadeIn" alt={hero.superhero} />

        </div>
        <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">

         <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego}</li>
        
            <li className="list-group-item"><b> Publisher:</b> { hero.publisher }</li>

        <li className="list-group-item"><b>First Appearance:</b> { hero.first_appearance}</li>
        </ul>

        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button 
        className="btn btn-outline-info"
        onClick={handleReturn}
        >
        
        Regresar </button>

        
        
        </div>

    
    </div>
  )
}
