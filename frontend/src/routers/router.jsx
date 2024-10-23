import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/orders",
            element:<div>orders</div>
        },
        {
            path:"/about",
            element:<div>about</div>
        }
      ]
    },
  ]);

  export default router;