import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

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
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ]
    },
  ]);

  export default router;