


const RestrauntCard = (resdata ) => {  

    const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId } = resdata;
    const { deliveryTime } = sla;
  
    return (

      
        <div className="res-container">
     
        
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name}  />
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
     
        <h4>{deliveryTime}</h4>
      </div>
   
    
   
    );
  };

  export default RestrauntCard;