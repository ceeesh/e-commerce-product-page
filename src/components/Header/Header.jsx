import React, { useContext, useState } from 'react'
import logo from '../../../images/logo.svg'
import iconCart from '../../../images/icon-cart.svg'
import avatar from '../../../images/image-avatar.png'
import { Context } from '../context/context'
import CartModal from './CartModal'

const Header = () => {
  const { quantity, setQuantity, cartNum, setCartNum, } = useContext(Context)
  const [cart, setCart] = useState(false)

  const openModal = () => {
    setCart(prevState => !prevState)
  }
  
  return (
    <div className="container max-w-[calc(100% - 9rem)] mx-auto flex text-center items-center border-b-[1px] h-28 border-gray">
      <div>
        <a href="#"> <img src={logo} /></a>
      </div>

      <nav className="w-full ml-8">
        <ul className="flex ">
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-100">Collections</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-100">Men</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-100">Women</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-100">About</a>
          </li>
          <li className='mx-4 text-darkgray font-thin'>
            <a href="#" className="hover:border-b-2 border-orange transition-all duration-100">Contract</a>
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