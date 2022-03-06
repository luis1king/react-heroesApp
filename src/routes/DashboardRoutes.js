import { Navbar } from "../components/ui/Navbar"
import { Routes, Route} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/seach/searchScreen';
import { Hero } from "../components/hero/Hero";




export const DashboardRoutes = () => {
  
  return (
    
    <>
       <Navbar/>

       <div className="container principal" >   
        <Routes>
       <Route path="/marvel" element={<MarvelScreen />} />
       <Route path="/dc" element={<DcScreen />} />
       <Route path="/search" element={<SearchScreen />} />
       <Route path="/hero/:heroeId" element={<Hero />} />
       <Route path="/" element={<MarvelScreen />} />
       
       
     </Routes>
     </div>
   

  </>
  
 
    
  )
}
