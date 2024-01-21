import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from "./Aboutus";
import Contact from "./Contact";
import Error from "./Error";

const Applayout=()=>{
   return(<div>
    <Header/>
   <Body/>

 
   </div>)
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<Applayout/>,
      errorElement:<Error/>
   },
   {
      path:"/about-us",
      element:<AboutUs/>,
     
   },
   {
      path:"/contact",
      element:<Contact/>,
     
   }

])
  




let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
