import React from 'react'

const About = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center overflow-x-hidden">
            <h1 className="text-yellow-400 font-mono text-3xl font-bold uppercase">Welcome to the About Page</h1>
            <p className="w-1/2 text-gray-700 font-mono text-base text-center mt-10">We bring the best taste to you from our kitchen and we invite to you to visit PizzaGhar once and give your reviews. We are always looking forward to improve. 🍕 🍕 🍕</p>

            <marquee className="text-gray-600 font-mono mt-16 bg-yellow-500">We love our customers 💁</marquee>
            <marquee className="text-gray-600 font-mono mt-16 bg-yellow-500">We value your feedback. 💁</marquee>
        </div>
    )
}

export default About
