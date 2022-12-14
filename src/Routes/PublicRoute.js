import NotFound from "../components/NotFound/NotFound";
import TotalSeller from "../dashboard/AdminMange/TotalSeller";
import AllBuyer from "../dashboard/AllBuyer/AllBuyer";
import AllSeller from "../dashboard/AllSeller/AllSeller";
import DashboardLayout from "../dashboard/DashboardLayout";
import AddProduct from "../dashboard/ManageProduct/AddProduct";
import MyProduct from "../dashboard/ManageProduct/MyProduct";
import MywhistList from "../dashboard/ManageProduct/MywhistList/MywhistList";
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
                loader : ({params}) => fetch(`https://mobile-market-server-five.vercel.app/products?categoryName=${params.categoryName}`),
                element : <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>
            },
            {
                path : '/blogs',
                element : <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
            },
            {
                path : '/*',
                element : <NotFound></NotFound>
            },
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
                path : '/dashboard/mywhistlist',
                element:<MywhistList></MywhistList>
            },
            {
                path : '/dashboard/addproducts',
                element:<AddProduct></AddProduct>
            },
            {
                path : '/dashboard/myproducts/:sellerName',
                loader: ({params})=> fetch(`https://mobile-market-server-five.vercel.app/sellePproducts?sellerName=${params.sellerName}`),
                element:<MyProduct></MyProduct>
            },
            {
                path : '/dashboard/allseller/:userstatus',
                loader : ({params}) => fetch(`https://mobile-market-server-five.vercel.app/users?userstatus=${params.userstatus}`),
                element:<TotalSeller></TotalSeller>
            },
            {
                path : '/dashboard/allbuyer/:userstatus',
                loader : ({params}) => fetch(`https://mobile-market-server-five.vercel.app/users?userstatus=${params.userstatus}`),
                element:<AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://mobile-market-server-five.vercel.app/orders/${params.id}`)
            }
        ]
    }
])

export default router;