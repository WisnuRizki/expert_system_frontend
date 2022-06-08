import React, {Component,useState} from 'react';
import {Link} from 'react-router-dom';

function Registrasi(){
    let [nama,getNama] = useState();
    let [email,getEmail] = useState();
    let [password,getPassword] = useState();
    let [confirmPassword,getConfirmPassword] = useState();

    function onNama(event){
        getNama(event.target.value);
    }

    function onEmail(event){
        getEmail(event.target.value)
    }

    function onPassword(event){
        getPassword(event.target.value)
    }

    function onConfirmPassword(event){
        getConfirmPassword(event.target.value)
    }

    function onRegistrasi(){
        if(password === confirmPassword){
            fetch('http://localhost:3001/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                nama: nama,
                email: email,
                password: password
            })
      })
        }
    }


    return(
        <div className='w-full h-screen gap-2 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className='bg-white w-1/2 lg:w-1/3 rounded-md flex flex-col items-center'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black'>Registrasi</h1>
                <form className="flex flex-col gap-4 w-3/4 mt-6 mb-7">
                    <label className='text-left'>Masukkan Nama</label>
                    <input onChange={onNama} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400" type="text" placeholder="Nama"/>
                    <label className='text-left'>Masukkan Email</label>
                    <input onChange={onEmail} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Email"/>
                    <label className='text-left'>Masukkan Password</label>
                    <input onChange={onPassword} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Password"/>
                    <label className='text-left'>Ketik Ulang Password</label>
                    <input onChange={onConfirmPassword} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Ketik Ulang Password"/>
                    {/* <Link to="/login"> */}
                        
                    {/* </Link> */}
              </form>
              <button onClick={onRegistrasi} className="h-10 w-1/2 bg-green-400 text-xl text-white font-bold mt-3 mb-4">Log in</button>
            </div>
        </div>
    );
}

export default Registrasi;