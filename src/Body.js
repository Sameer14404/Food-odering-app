

import RestrauntCard from "./RestrauntCard";


const Body=()=>{
    return(
        <div className="body">
         {resList.info.map((restraunt)=><RestrauntCard id={restraunt.id} resdata={restraunt}/>)}
        </div>
    )
}

export default Body;