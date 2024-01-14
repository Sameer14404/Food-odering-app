import restrautList  from "../constant/mockdata";

import RestrauntCard from "./RestrauntCard";


const Body=()=>{
    return(
        <div className="body">
       {restrautList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
        </div>
    )
}

export default Body;