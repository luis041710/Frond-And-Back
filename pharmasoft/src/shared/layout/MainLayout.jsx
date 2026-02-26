import Navbar from "@/shared/Layout/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout(){

    return(
        <div className="min-h-screen">
            {/* Navbar */}
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-6">
                <Outlet />
            </main>

        </div>


    );
};