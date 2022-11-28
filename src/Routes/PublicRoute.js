import TotalSeller from "../dashboard/AdminMange/TotalSeller";
import AllSeller from "../dashboard/AllSeller/AllSeller";
import DashboardLayout from "../dashboard/DashboardLayout";
import AddProduct from "../dashboard/ManageProduct/AddProduct";
import MyProduct from "../dashboard/ManageProduct/MyProduct";
import MyOrders from "../dashboard/MyOrder/MyOrders";
import Payment from "../dashboard/Payment/Payment";
import Blogs from "../pages/Blogs/Blogs";
import CategoryDetails from "../pages/PhoneCategory/CategoryDetails";
import DisplayError from "../pages/Shared/DisplayError/DisplayError";
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
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<DisplayError></DisplayError>,
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
                path : '/dashboard/myproducts/:sellerName',
                loader: ({params})=> fetch(`http://localhost:5000/sellePproducts?sellerName=${params.sellerName}`),
                element:<MyProduct></MyProduct>
            },
            {
                path : '/dashboard/allseller/:userstatus',
                loader : ({params}) => fetch(`http://localhost:5000/users?userstatus=${params.userstatus}`),
                element:<TotalSeller></TotalSeller>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    }
])

export default router;