import { useState } from "react"

const Mind=(card)=>{
    const{imageId}=card
  



    return(
      
       
            <div className="mind_card">
                  
            <img src={` https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`}/>
          
        </div>
    )
}

export default Mind