import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import BurgerMenu from '../navMenu/BurgerMenu';
import SidebarUser from './SidebarUser';


function DiagnosaUser(){
    const [daftarGejala,setDaftarGejala] = useState();
    const [gejalaUser,setGejalaUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/allGejala')
        .then(response => response.json())
        .then(data => {
            setDaftarGejala(data.data)
        })
    },[]);

    function addGejalaUser(event){
        let check = event.target.checked;
        let checkedGejala = daftarGejala[parseInt(event.target.value)];
        if(check){
            setGejalaUser(oldArray => [...oldArray, checkedGejala]);   
        }else{
            let index = gejalaUser.indexOf(checkedGejala);
            if(index > -1){
                gejalaUser.splice(index,1);
                setGejalaUser(gejalaUser);  
            }
        }
       
        //console.log(gejalaUser);
    }

   function onCheck(){
        let kdGejala = [];
        for(let i =0; i< gejalaUser.length;i++){
            kdGejala.push(gejalaUser[i].kd_gejala)
        }
        fetch('http://localhost:3001/data',{
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
            gejalaPasien: kdGejala
        })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.hasilAkhir[0].nm_penyakit)
        })
   }

    return(
        <div className='h-screen w-full'>
            <div className='lg:hidden'>
                <BurgerMenu />
            </div>
            <div className='h-screen w-full flex overflow-hidden'>
                <SidebarUser />
                <div className='lg:w-5/6 sm:w-full flex-col h-screen flex sm:mt-20 lg:-mt-1'>
                    <h1 className='text-black pl-2 text-xl font-bold py-4 border-solid border-2 border-gray-200'>Diagnosa</h1>
                    <h1 className='text-black pl-2 text-xl py-4 border-solid border-2 border-gray-200 font-bold text-gray-400'>Pilih gejala yang dirasakan</h1>
                    <div className='flex gap-2 w-full h-screen overflow-auto'>
                        <div className='w-7/12 h-full pb-3 '>
                            <table class="table-auto w-full ">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
                                        <th class="p-2">
                                            <div class="font-semibold text-left">Nama Penyakit</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100 ">
                                    {
                                        daftarGejala ? daftarGejala.map((gejala,i) => {
                                            return <tr>
                                                <td class="p-2">
                                                    <input type="checkbox" onChange={addGejalaUser} class="w-5 h-5" value={i}
                                                        />
                                                </td>
                                                <td class="p-2">
                                                    <div class="font-medium text-gray-800 text-xl">
                                                        {gejala.nm_gejala}
                                                    </div>
                                                </td>   
                                            </tr>
                                        })
                                        : null
                                    }   
                                </tbody>
                            </table>
                        </div>
                        <div className='w-4/12 flex h-fit justify-center ml-2'>
                            <div className='w-full bg-gray-200 mt-2'>
                                <h1 className='bg-sky-500 text-center text-2xl py-2'>Gejala Yang Dirasakan</h1>
                                <ol className='list-decimal ml-7 lg:text-xl sm:text-md mt-2 mb-4 font-bold flex flex-col gap-2'>
                                    {gejalaUser.length !== 0 ? gejalaUser.map((item) => {
                                        return <li>{item.nm_gejala}</li>
                                    })
                                    : <li>Daftar Kosong</li>}
                                    {/* <li>Gejala Yang Dirasakan</li>
                                    <li>Gejala Yang Dirasakan</li>
                                    <li>Gejala Yang Dirasakan</li> */}
                                </ol>
                                <button onClick={onCheck} className='bg-green-400 hover:bg-green-600 w-36 h-10 font-bold text-white ml-2 mb-6'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagnosaUser;