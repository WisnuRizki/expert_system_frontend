import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Dashboard from '../DashboardUser/Dashboard';
function Login(){
    return(
        <div className='w-full h-screen gap-2 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className='bg-white w-1/2 h-1/2 lg:w-1/3 rounded-md flex flex-col items-center'>
                <h1 className='text-center font-bold text-4xl mt-4'>Log in</h1>
                <form className="flex flex-col gap-4 w-3/4 mt-6">
                    <label className='text-left'>Masukkan Email</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400" type="text" placeholder="Email"/>
                    <label className='text-left'>Masukkan Password</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Password"/>
                <button className="h-10 w-full bg-green-400 text-xl text-white font-bold">Log in</button>
              </form>
              <p className='mt-2 text-lg'>Belum punya akun ?
                <Link to='/registrasi'>
                    <a className='text-cyan-400 ml-1' href=''>Daftar disini</a>
                </Link>
             </p>
            </div>
        </div>
    );
}

export default Login;