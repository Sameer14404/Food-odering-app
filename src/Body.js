// import reslist  from "../constant/mockdata";

import RestrauntCard from "./RestrauntCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";





const Body=()=>{
  let  [restaurantList,setRestaurantList]=useState([]);
 let [searchText,setSearchText]=useState("");
 let [filterRestaurant,setFilterRestaurant]=useState([]);

  useEffect(()=>{
    Fetchdata();
     },[])

 let Fetchdata=async()=>{
  let res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  let data= await res.json();

  setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilterRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

if(restaurantList.length==0){
  return(
  <Shimmer/>
  )
}



    return(
      <div>

<div className="filter">
  <button className="filter-btn" onClick={()=>{
  let topRatedList=restaurantList.filter((res)=>res.info.avgRating>4)
   setFilterRestaurant(topRatedList)
  }}>
    Top rated restaurant
  </button>
  <div className="search">
    <input type="text" className="input-search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    
    <button className="search-btn" onClick={()=>{
      let search=restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
setFilterRestaurant(search)
    
    }}>search</button>
  </div>
</div>

        <div className="body">
      
      {filterRestaurant.map((restaurant)=><RestrauntCard key={restaurant.info.id} {...restaurant}/>)}
   
        </div>
   
      </div>
    )
   
}

export default Body;