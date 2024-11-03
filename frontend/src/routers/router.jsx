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
import AdminRoute from './AdminRoute';
import AdminLogin from '../Components/AdminLogin';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import ManageBooks from '../pages/dashboard/ManageBooks/ManageBooks';
import AddBook from '../pages/dashboard/AddBook/AddBook';
import UpdateBook from '../pages/dashboard/EditBook/UpdateBook';

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
      ]},
      
        {
          path:"/admin",
          element:<AdminLogin/>,
        },
        {
          path:"/dashboard",
          element:<AdminRoute>
            <DashboardLayout/>
          </AdminRoute>,
          children:[
            {
              path: "",
              element:<AdminRoute><Dashboard/></AdminRoute>,
            },
            {
              path: "add-new-book",
              element:<AdminRoute><AddBook/></AdminRoute>,
            },
            {
              path: "edit-book/:id",
              element:<AdminRoute><UpdateBook/></AdminRoute>,
            },
            {
              path: "manage-books",
              element:<AdminRoute><ManageBooks/></AdminRoute>,
            },
          ]
        }
      
  ]);

  export default router;