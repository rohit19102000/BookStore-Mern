import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import CartPage from '../pages/book/CartPage';
import CheckoutPage from '../pages/book/CheckoutPage';
import SingleBook from '../pages/book/SingleBook';
import PrivateRoute from './PrivateRoute';
import OrderPage from '../pages/book/OrderPage';

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
            element:<PrivateRoute> <OrderPage/></PrivateRoute>
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
        {
          path:"/cart",
          element:<CartPage/>
        },
        {
          path:"/checkout",
          element:<PrivateRoute> <CheckoutPage/></PrivateRoute>
        },
        {
          path:"/books/:id",
          element:<SingleBook/>
        },
      ]
    },
  ]);

  export default router;