import React, {Component, useState} from 'react';
import {Link,Navigate} from 'react-router-dom';



function Login(){
    let [email,getEmail] = useState();
    let [password,getPassword] = useState();
    let [changePage,getChangePage] = useState(false);

    function onEmail(event){
        getEmail(event.target.value)
    }

    function onPassword(event){
        getPassword(event.target.value)
    }

    function onChangePage(){
        getChangePage(true);
    }

    function toDashboard(){
        if(changePage){
            return <Navigate to={{
                pathname: '/dashboarduser',
               }}/>
        }
    }

    function onLogin(){
        fetch('http://localhost:3001/login',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
              email: email,
              password: password
          })
      })
      .then(response => response.json())
      .then(data => {
        if(data.message === 'success'){
          console.log(data.message)
          onChangePage()
        }else{
          console.log(data.message)
        }
     
      })
    }


    return(
        <div className='w-full h-screen gap-2 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            {toDashboard()}
            <div className='bg-white w-1/2 h-1/2 lg:w-1/3 rounded-md flex flex-col items-center'>
                <h1 className='text-center font-bold text-4xl mt-4 text-black'>Log in</h1>
                <form className="flex flex-col gap-4 w-3/4 mt-6">
                    <label className='text-left'>Masukkan Email</label>
                    <input onChange={onEmail} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400" required type="text" placeholder="Email"/>
                    <label className='text-left'>Masukkan Password</label>
                    <input onChange={onPassword} className="w-full -mt-3 pl-2 h-10 text-xl border-solid border-2 border-gray-400" required type="text" placeholder="Password"/>
                   
                    
              </form>
              <button onClick={onLogin} className="h-10 w-1/2 bg-green-400 text-xl text-white font-bold mt-3">Log in</button>
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