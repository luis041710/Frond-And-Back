// Página pública 

import heroBg from "@/assets/images/10-imagen-hero.jpg"

export default function HomePage(){
    return(
        <section
        className="relative min-h-screen w-full flex items-center justify-center text-black"
        style={
            {
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        }
        >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center">
            <h1 className="text-h1 font-stretch-expanded">
                bienvenido al sena
            </h1>    
                <p className="text-body">
                Aprende según tus gustos, desde panaderia hasta control numérico.
                </p>
            
        </div>

        </section>

    )
}