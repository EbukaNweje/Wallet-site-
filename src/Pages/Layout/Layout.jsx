import React from 'react'
import {Outlet} from 'react-router-dom'
import '../Home/Home.css'
import { SiSquare } from "react-icons/si";

const Layout = () => {

    return (
        <div className='Layout'>
         <Outlet/>
                 <footer>
                     <SiSquare size={28} color='#93979c'/>
                   <span>Powered by Square</span>  
                 </footer>       
        </div>
    )

}

export default Layout