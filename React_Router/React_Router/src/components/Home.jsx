import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <p>Hey there everyone i'm</p>
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            <span className='text-red-500'>S</span>. <span className='text-red-500'>S</span>ankar <span className='text-red-500'>S</span>wain
                            <span className="hidden sm:block text-4xl text-violet-950">CNC machinist by Profession 
                            Programmer by Passion</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                           
                            &nbsp; Hire Me
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-xl" src="https://media.licdn.com/dms/image/D5603AQEHo_hFYnFCuw/profile-displayphoto-shrink_200_200/0/1695103034694?e=1706140800&v=beta&t=j0y9xax9tB71No_3ltWuOfbGPbqr0hMzu1M-pDRysD0" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
