import React,{Component} from 'react';
import {useLocation} from 'react-router-dom'

function Home(){

    const location = useLocation();
    const data = location.state;
    console.log(data.name);

    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default Home;