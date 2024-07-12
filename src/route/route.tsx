import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Component/Layout/Mainlayout";




const router = createBrowserRouter([
  
  {
    path: "/",
    element:<Mainlayout></Mainlayout>
     ,
     children: [
        {
            
        }
     ],
  },

  
]);
export default router
