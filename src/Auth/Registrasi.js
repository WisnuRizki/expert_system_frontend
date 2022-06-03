import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Registrasi(){
    return(
        <div className='w-full h-screen gap-2 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className='bg-white w-1/2 lg:w-1/3 rounded-md flex flex-col items-center'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black'>Registrasi</h1>
                <form className="flex flex-col gap-4 w-3/4 mt-6 mb-7">
                    <label className='text-left'>Masukkan Nama</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400" type="text" placeholder="Nama"/>
                    <label className='text-left'>Masukkan Email</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Email"/>
                    <label className='text-left'>Masukkan Password</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Password"/>
                    <label className='text-left'>Ketik Ulang Password</label>
                    <input className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Ketik Ulang Password"/>
                    <Link to="/login">
                        <button className="h-10 w-full bg-green-400 text-xl text-white font-bold">Daftar</button>
                    </Link>
              </form>
    
            </div>
        </div>
    );
}

export default Registrasi;