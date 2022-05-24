import React from 'react';
import BurgerMenu from '../navMenu/BurgerMenu';

function DashboardUser(){
    return(
        <div className='h-screen w-full'>
            <div className='lg:hidden'>
                <BurgerMenu />
            </div>
            <div className='h-screen w-full flex'>
                <div className='w-1/6 bg-indigo-500 h-screen flex flex-col items-center text-2xl text-white gap-4 lg:block sm:hidden'> 
                    <div className='flex gap-6 items-center justify-center w-full h-14 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <h1 className='text-xl font-bold'>Selamat datang Wisnu</h1>
                    </div>
                    
                    <div className='flex gap-6 items-center pl-7 w-full h-14 hover:bg-indigo-700 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>

                        <h1>Dashboard</h1>
                    </div>

                    <div className='flex gap-6 items-center pl-7 w-full h-14 hover:bg-indigo-700 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>

                        <h1>Contact</h1>
                    </div>

                    <div className='flex gap-6 items-center pl-7 w-full h-14 hover:bg-indigo-700 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>

                        <h1>Campaign</h1>
                    </div>

                    <div className='flex gap-6 items-center pl-7 w-full h-14 hover:bg-indigo-700 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>

                        <h1>Template</h1>
                    </div>

                    <div className='flex gap-6 items-center pl-7 w-full h-14 hover:bg-indigo-700 mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <h1>Settings</h1>
                    </div>
                </div>
                <div className='w-5/6 sm:flex-col h-screen flex lg:flex-row gap-2 m-6'>
                    <div className='lg:w-1/4 sm:w-full sm:m-5 sm:mt-20 lg:mt-5 h-40 border-solid border-2 border-gray-200 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-blue-400 text-6xl font-bold'>1</h1>
                        <p className='text-gray-400 text-2xl'>Diagnosa</p>
                    </div>

                    <div className='lg:w-1/4 sm:w-full sm:m-5 h-40 border-solid border-2 border-gray-200 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-blue-400 text-6xl font-bold'>1</h1>
                        <p className='text-gray-400 text-2xl'>Penyakit</p>
                    </div>

                    <div className='lg:w-1/4 sm:w-full sm:m-5 h-40 border-solid border-2 border-gray-200 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-blue-400 text-6xl font-bold'>1</h1>
                        <p className='text-gray-400 text-2xl'>Gejala</p>
                    </div>

                    <div className='lg:w-1/4 sm:w-full sm:m-5 h-40 border-solid border-2 border-gray-200 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-blue-400 text-6xl font-bold'>1</h1>
                        <p className='text-gray-400 text-2xl'>User</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardUser;