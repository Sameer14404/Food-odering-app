import reslist  from "../constant/mockdata";

import RestrauntCard from "./RestrauntCard";
import { useState , useEffect} from "react";




const Body=()=>{
  const [restaurantList,setRestaurantList]=useState(reslist);
 
  let Fetchdata=async()=>{
    let res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let data= await res.json();
    console.log(data)
  }
  useEffect(Fetchdata(),[])

    return(
      <div>

<button className="top-btn" onClick={()=>{ let filterdData= reslist.filter((el)=>el.info.avgRating>4.5);
        setRestaurantList(filterdData)
       }
       } >Top Restaurant </button>
        <div className="body">
        
       {restaurantList.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
      })}
        </div>
    
      </div>
    )
   
}

export default Body;