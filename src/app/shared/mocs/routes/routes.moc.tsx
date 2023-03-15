import Home from "../../../pages/Home/Home";
import Login from "../../../pages/Login/Login";

export const routes: Array<any> = [
    {
        path: "/home",
        component: <Home></Home>
    },
    {
        path: "/login",
        component: <Login></Login>
    }
]