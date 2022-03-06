import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";



export const HeroList = ({publisher}) => {

    const heroes = useMemo (()=>getHeroByPublisher(publisher),[publisher]);







  return (
    <div className="row rows-col-1 row-col-md-3 g-3 animate__animated animate__fadeInDown">
   {
      heroes.map( hero =>(
       <HeroCard key={hero.id}
       { ...hero }
        />
       
      
      ))
  }
   
   

    </div>
  )
}
