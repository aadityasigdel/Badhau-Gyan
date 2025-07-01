import React from 'react'
import Navigation from './Navigation.jsx'
export default function Profile() {
    return (
        <div className='max-h-screen'>
            <Navigation />
            <div className="flex flex-col items-center justify-center h-screen w-full" >
                
                <div className='flex-col flex'>
                    <h1 className='text-4xl font-bold text-[#0033A0] mb-6'> Your Profile</h1>
                    <img className='w-32 h-32 rounded-full bg-amber-50 border-1 mb-3'>
                    </img>
                    <ul className='flex flex-col gap-6 '>
                        <li>Name</li>
                        <li>Username</li>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>Address</li>

                        <summary>
                            <h1 className='text-2xl font-bold text-[#0033A0] mb-6'>About Me</h1>
                            Hi my name is Aditya
                        </summary>
                    </ul>
                </div>
            </div>
        </div>
    )
}
