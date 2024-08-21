import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';


const Header=()=>{
    return(
        <div>
            <div className='header'>
                <ul className='header head'>
                    <li className='header btn-1'><button className='btn-1'>Subscribe</button></li>
                    <li className='header btn-2'><button className='btn-2'>Sign in</button></li>
                </ul>
            </div>
            <div className='heading'>
                <h1 className='title'>THE DAILY CHRONICLE</h1>
            </div>
            <div className='nav'>
                <ul className='nav-bar'>
                    <li>Videos</li>
                    <li>City</li>
                    <li>India</li>
                    <li>Olympics</li>
                    <li>World</li>
                    <li>Business</li>
                    <li>Tech</li>
                    <li>Cricket</li>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Auto</li>
                    <li>TV</li>
                    <li>Web Series</li>
                    <li>Life & Style</li>
                    <li>Education</li>
                    <li>Photos</li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li><i class="fa-solid fa-bars"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;