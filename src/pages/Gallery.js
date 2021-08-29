import React from 'react'

const Features = () => {
    return (
        <div className="h-auto w-screen flex flex-col justify-center items-center overflow-x-hidden my-6">
            <h1 className="text-yellow-400 font-mono text-3xl font-bold uppercase my-6 text-center px-4">Welcome to the Gallery Page</h1>
            <div>
              
                <div className="my-8 flex items-center justify-around flex-wrap gap-2">
                <img src="/TandooriPaneer.jpg" className="transition duration-500 ease-in-out sm:opacity-75 md:opacity-75 lg:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/TandooriPaneer1.jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/TandooriPaneer2.jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/MaggiChatpata.jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/HotnSpicy.jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/Veggies.jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                <img src="/SimpleVeg(Capsicum).jpg" className="transition duration-500 ease-in-out md:opacity-75 lg:opacity-75 sm:opacity-75 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110 cursor-pointer w-40 h-40 object-contain" alt="Pizza" />
                </div>
                <img src="/logo.png" alt="logo" className="text-center w-full"/>
            </div>
            
        </div>
    )
}

export default Features;
