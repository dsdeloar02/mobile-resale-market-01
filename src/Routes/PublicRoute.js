import AllSeller from "../dashboard/AllSeller/AllSeller";
import DashboardLayout from "../dashboard/DashboardLayout";
import CategoryDetails from "../pages/PhoneCategory/CategoryDetails";

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
                element : <CategoryDetails></CategoryDetails>
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
            }
        ]
    }
])

export default router;