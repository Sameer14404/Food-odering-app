import reslist  from "../constant/mockdata";

import RestrauntCard from "./RestrauntCard";


const Body=()=>{
    return(
        <div className="body">
       {reslist.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
      })}
        </div>
    )
}

export default Body;