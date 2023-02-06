import React from 'react'
import logo from '../../../images/logo.svg'
import iconCart from '../../../images/icon-cart.svg'
import avatar from '../../../images/image-avatar.png'

const Header = () => {
  return (
    <div className="container flex w-full text-center items-center mx-36 border-b-2 h-28">
      <div>
        <a href="#"> <img src={logo} /></a>
      </div>

      <nav className="w-full ml-8">
        <ul className="flex ">
          <li className='mx-4'>
            <a href="#">Collections</a>
          </li>
          <li className='mx-4'>
            <a href="#">Men</a>
          </li>
          <li className='mx-4'>
            <a href="#">Women</a>
          </li>
          <li className='mx-4'>
            <a href="#">About</a>
          </li>
          <li className='mx-4'>
            <a href="#">Contract</a>
          </li>
        </ul>
      </nav>

      <div className="">
        <ul className="flex">
          <button><img src={iconCart} className="w-[25px]"/></button>
          <button className="ml-7"><img src={avatar} className="w-[45px]"/></button>
        </ul>
      </div>
    </div>
  )
}

export default Header