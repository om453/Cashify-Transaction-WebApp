import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h1 className=' font-bold font-sans text-3xl'>Welcome to Cashify</h1>

                <div className='flex flex-row justify-between items-center pt-8'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
                        <Link className="pointer cursor-pointer" to={"/signup"}>
                            Sign up
                        </Link>
                    </button>
<div className='mr-3 font-semibold'>OR</div>            
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transform transition-all duration-300 hover:scale-105" >
                        <Link className="pointer cursor-pointer" to={"/signin"}>
                            Sign in
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default WelcomePage