import { Link } from "react-router-dom"
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return (
    <div className="col">
    
    <div className="card" style={{width:"18rem"}}>
        <span className="border border-info border border-2">

            <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero}/>


            
            <div className ="card-body">
                <h5 className ="card-title">{superhero}</h5>
                <p className ="card-text">{alter_ego}</p>
                <p className ="card-text">{first_appearance}</p>
            </div>

            <Link to={`/hero/${id}`} >Más info...</Link>
            </span>


           
            
        </div>
       
                
        
         
    </div>

  )
    
}
