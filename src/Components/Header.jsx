import React from 'react'
import '../Styles/Header.css'
import logo from '../Images/logo.jpg';
import { CgProfile } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";


export const Header = () => {
  return (
    <div>
        <div className="header">
            <a href=""><img src={logo} alt="" className="logo" /></a>
            <div className='menus'>
                <li><a href="#"><CgProfile/> Sign In |</a></li>
                <li><a href="#">Join Now |</a></li>
                <li><a href="#">Find Reservations |</a></li>
                <li><a href="#"> <GrLanguage/> English |</a></li>
                <li><a href="#">LKR |</a></li>
                <li><a href="#"><IoIosPhonePortrait/> </a></li>
            </div>
        </div>
        
      </div>
  )
}
