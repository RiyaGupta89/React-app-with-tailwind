import React from 'react'

const Features = () => {
    return (
        <div className="h-auto w-screen flex flex-col justify-center items-center overflow-x-hidden my-6">
            <h1 className="text-yellow-400 font-mono text-3xl font-bold uppercase my-6">Welcome to the Features Page</h1>
            <img src="/images/logo.png" alt="logo" />
<div className="w-4/5">
            <h1 className="font-mono my-5 text-gray-700 text-3xl">We provide pizzas with good <span className="text-yellow-400">crust.</span> 🍕 🍕</h1>
            <h1 className="font-mono my-5 text-gray-700 text-3xl">We provide pizzas with <span className="text-yellow-400">different varity of amazing toppings.</span> 🍕 🍕</h1>
            </div>
        </div>
    )
}

export default Features;
