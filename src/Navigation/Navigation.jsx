import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import GraphModal from "../Components/GraphModal";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
        path : "showModal",
        element : <GraphModal/>
    }  
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
