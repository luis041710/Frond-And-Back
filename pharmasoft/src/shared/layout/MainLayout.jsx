import Navbar from "@/shared/Layout/Navbar";
import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/10-imagen-hero.jpg"

export default function MainLayout(){

    return(
        <div className="relative min-h-screen">
            <div className="absolute -z-10 inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${heroBg})`}}>

            </div>



            {/* Navbar */}
            <header className="-z-100">
                <Navbar />
            </header>

            <main className="mx-auto max-w-7xl px-4 py-6">
                <Outlet />
            </main>

        </div>


    );
};