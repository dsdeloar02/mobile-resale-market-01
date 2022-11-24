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
            }
        ]
    }
])

export default router;