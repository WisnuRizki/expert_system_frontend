import { Link } from "react-router-dom";
import Expert from './expert1.png';

import NavMenuList from "./navMenu/NavMenuList";

export default function App() {
  return (
    <div className="h-screen w-full">
      {/* Nav */}
      <NavMenuList />

      <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex justify-center items-center">
          <div className="w-full lg:w-3/5 ml-2">
            <h1 className="text-6xl font-bold text-white sm:text-center lg:text-left">Selamat datang di Website Expert System</h1>
            <p className="mt-4 text-white text-xl sm:text-center lg:text-left">Mendeteksi penyakit mata dengan mudah,cepat dan akurat. Pilih gejala yang dialami dan dapatkan hasil diagnosis</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-screen justify-center items-center sm:mt-10 lg:mt-0 lg:ml-10">
          <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex justify-center items-center">
            <div className="w-full lg:w-96 ml-2 mr-2 bg-white flex flex-col justify-center items-center rounded-md sm:mt-20 lg:mt-0">
              <h1 className="text-4xl text-black font-bold text-center my-2 my-4">Registrasi</h1>
              <form className="flex flex-col align-center gap-4 w-3/4">
                <input className="w-full pl-2 h-10 text-xl border-solid border-2 border-gray-400" type="text" placeholder="Name" />
                <input className="w-full pl-2 h-10 text-xl border-solid border-2 border-gray-400" type="text" placeholder="Email"/>
                <input className="w-full  pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Password"/>
                <input className="w-full  pl-2 h-10 text-xl border-solid border-2 border-gray-400"type="text" placeholder="Ketik Ulang Password"/>
                <button className="h-10 w-full bg-green-400 text-xl text-white">Create Account</button>
              </form>          
              <p className="mt-4 pb-6">By sign in you agree Term and services</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}