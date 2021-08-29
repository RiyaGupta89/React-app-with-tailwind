import React from 'react'

const Contact = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center overflow-x-hidden my-6">
            <h1 className="text-yellow-400 font-mono text-3xl font-bold uppercase mb-3">We are happy to connect with our customers</h1>

            <form onSubmit={(event)=>{event.preventDefault(); alert("Thankyou for filling our form.")}}>
                <div className="flex flex-col my-4">
                    <label>Email</label>
                    <input className="bg-gray-100 outline-none" type="text" name="email" id="email" />
                </div>
                <div className="flex flex-col my-4">
                    <label>Query</label>
                    <textarea className="bg-gray-100 outline-none" name="query" id="query" cols="30" rows="4"></textarea>
                </div>
                <div className="flex flex-col my-4">
                    <label>Feedback</label>
                    <textarea className="bg-gray-100 outline-none" name="feedback" id="query" cols="30" rows="4"></textarea>
                </div>
                <div className="my-4">
                    <label>Find us on <a href="https://www.google.com/search?q=pizza+ghar&rlz=1C1ASUM_enIN858IN858&oq=pizza+&aqs=chrome.0.69i59l2j69i57j0i67j0i67i433j69i60l3.1632j0j9&sourceid=chrome&ie=UTF-8" className="text-yellow-400">Google</a></label>
                </div>
                <div className="my-4">
                    <label>Connect with us on <a href="https://www.instagram.com/pizza_ghar_barabanki/?hl=en" className="text-yellow-400">Instagram</a></label>
                </div>
                <div className="my-4">
                    <label>Connect with us on <a href="https://www.facebook.com/pizzaghar.barabanki/" className="text-yellow-400">Facebook</a></label>
                </div>
                <div className="flex items-center my-4">
                    <input type="checkbox" name="checkbox" id="subscribe" />
                    <p className="pl-3">Subscribe to our weekly newsletter</p>
                </div>

                <button type="submit" className="bg-yellow-400 text-gray-100 py-2 px-8 text-lg hover:bg-yellow-500">Submit</button>
            </form>
        </div>
    )
}

export default Contact
