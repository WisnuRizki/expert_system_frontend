import React from 'react';
import BurgerMenu from '../navMenu/BurgerMenu';
import SidebarUser from './SidebarUser';
function DashboardUser(){
    return(
        <div className='h-screen w-full'>
            <div className='lg:hidden'>
                <BurgerMenu />
            </div>
            <div className='h-screen w-full flex'>
                <SidebarUser />
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