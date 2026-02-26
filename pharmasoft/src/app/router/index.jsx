import { createBrowserRouter } from "react router dom"
import MainLayout from "@/shared/Layout/MainLayout";
import { Children } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        Children: [
            {
                index: true,
                element: <h1 className="p-4">Inicio</h1>
                
            },
            {
                path:"cursos", 
                element: <h1 className="p-4">Cursos</h1>
            },
            {
                path:"contactos", 
                element: <h1 className="p-4">Contactos</h1>
            },
            {
                path:"videos", 
                element: <h1 className="p-4">Videos</h1>
            },
        ]
    }
])

export default router;
    







