import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([ //rotas
    {
        path:'/', //raiz ou home
        element: <Home />
    },
    {
        path:'lista-de-usuarios', //raiz ou home
        element: <ListUsers />
    }
])

export default router