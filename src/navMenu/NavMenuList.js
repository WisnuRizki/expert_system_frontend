import React,{Component} from 'react';
import Expert from '../expert1.png';
import {Link} from 'react-router-dom';


function NavMenuList(){
    return(
        <header className="flex justify-between items-center m-2">
          <div className="flex items-center align-center">
            <img src={Expert} width="150px"/>
          </div>
          <div>
            <Link to='/login'>
              <button className="text-xl w-40 h-10 font-bold text-blue-500 border-solid border-2 border-indigo-600">
                Log in</button>
            </Link>
          </div>
      </header>
    );
}

export default NavMenuList;