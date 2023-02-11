import React, { useContext, useState } from 'react'
import logo from '../../../images/logo.svg'
import iconCart from '../../../images/icon-cart.svg'
import avatar from '../../../images/image-avatar.png'
import { Context } from '../context/context'
import CartModal from './CartModal'
import burgMenu from '../../../images/icon-menu.svg'

const Header = () => {
  const { quantity, setQuantity, cartNum, setCartNum, setMenu } = useContext(Context)
  const [cart, setCart] = useState(false)

  const openModal = () => {
    setCart(prevState => !prevState)
  }

  const openMenu = () => {
    setMenu(prevState => !prevState)
  }
  
  return (
    <div className="container max-w-[calc(100% - 9rem)] mx-0 md:mx-auto justify-between flex text-center items-center h-28 lg:border-b-[1px] border-gray overflow-x-hidden">
      <div className="flex">
        <img src={burgMenu} onClick={openMenu} className="mx-5 cursor-pointer md:hidden"/>
        <a href="#"> <img src={logo} /></a> 
      </div>

      <nav className="w-full md:block hidden">
        <ul className="flex ">
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300 pb-11">Collections</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300 pb-11">Men</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300 pb-11">Women</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300 pb-11">About</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300 pb-11">Contract</a>
          </li>
        </ul>
      </nav>

      <div className="">
        <ul className="flex">
          <button onClick={openModal}><img src={iconCart} className="w-[25px]" />
          {cartNum === 0 ? null : (<span className="absolute top-9 text-xs bg text-white bg-orange w-5 rounded">{cartNum}</span>)}
          </button>
          <button className="ml-7 hover:border-2 border-orange rounded-full transition-all"><img src={avatar} className="w-[45px]" /></button>
        </ul>
      </div>
      {cart && (
        <CartModal/>
      )}
    </div>
  )
}

export default Header