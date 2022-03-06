import React, {useState} from 'react'
import { getHerosByName } from '../../helpers/getHerosByName'
import { HeroCard } from '../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from "query-string";



export const SearchScreen = () => {

  const navigate = useNavigate();
    const location = useLocation();
    const [searchInput, setSearchInput] = useState("");
          
    const {q} = queryString.parse(location.search);

    
    const handleInputChange = (e) => {

      setSearchInput(e.target.value)}
 
    const handleSubmit = (e) => {
        e.preventDefault();    
        setSearchInput("");
        navigate(`?q=${searchInput}`);
        console.log(q);   
      };

      //si se cambia por searchInput filtra los heroes si ejecutar submit
      const heroName = getHerosByName(q);
     
     

      

  return (
 <>
  <div>
          
              </div>
            <div>
                <h1>Busqueda</h1>
                <hr></hr>
                <div className="row">
                <div className="col-5"> 
               
                <form onSubmit={handleSubmit}>
              <input type="text" 
              name='searchText' 
              onChange={handleInputChange}
              value={searchInput}
              placeholder="Buscar Heroe"
              />
              <button type="submit" className="btn btn-primary mt-1">Buscar</button>
              </form>
              </div>

              <div className="col-7"> 
              <h4>Resultados</h4>

              
              {
                (q === '') ? <h2 className="alert alert-info">Buscar un heroe</h2> : (heroName.length === 0) && <h2  className="alert alert-danger"> No hay resultado</h2>
              }

               {heroName.map((hero)=> (
                  <HeroCard key={hero.id}
                  {...hero}/>
                ))}
                </div>
               

              
                
          </div>
          </div>

         
      

 </>
          
         
  )
}
