import AllSeller from "../dashboard/AllSeller/AllSeller";
import DashboardLayout from "../dashboard/DashboardLayout";
import AddProduct from "../dashboard/ManageProduct/AddProduct";
import MyProduct from "../dashboard/ManageProduct/MyProduct";
import MyOrders from "../dashboard/MyOrder/MyOrders";
import Blogs from "../pages/Blogs/Blogs";
import CategoryDetails from "../pages/PhoneCategory/CategoryDetails";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout");
const { default: Home } = require("../pages/Home/Home");
const { default: LogIn } = require("../pages/LogIn/LogIn");
const { default: SignUp } = require("../pages/SignUp/SignUp");

const router = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path : '/',
                element: <Home></Home>
            }, 
            {
                path : '/login',
                element: <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/products/:categoryName',
                loader : ({params}) => fetch(`http://localhost:5000/products?categoryName=${params.categoryName}`),
                element : <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>
            },
            {
                path : '/blogs',
                element : <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : '/dashboard',
                element : <AllSeller></AllSeller>
            },
            {
                path : '/dashboard/myorders',
                element:<MyOrders></MyOrders>
            },
            {
                path : '/dashboard/addproducts',
                element:<AddProduct></AddProduct>
            },
            {
                path : '/dashboard/myproducts',
                element:<MyProduct></MyProduct>
            }
        ]
    }
])

export default router;