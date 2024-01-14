import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Header";
import Body from "./Body";



  



const Applayout=()=>{
   return(<div>
    <Header/>
   <Body/>

 
   </div>)
}

let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
