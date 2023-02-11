import React, { useContext } from 'react'
import { Context } from '../context/context'
import close from '../../../images/icon-close.svg'

const MenuModal = () => {
    const { menu, setMenu } = useContext(Context)

    const closeMenu = () => {
        setMenu(prevState => !prevState)
    }

    return (
        <div className="h-[95rem] w-full bg-opac absolute top-0 z-10">
            <div className="h-[95rem] w-7/12 bg-white  top-0 left-0 ml-0">
                <img src={close} onClick={closeMenu} className="pt-10 pl-8"/>

                <nav className="w-full">
                    <ul className="flex flex-col justify-center pl-4 pt-9">
                        <li className='mx-4 text-lg text-black font-large pb-5'>
                            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300">Collections</a>
                        </li>
                        <li className='mx-4 text-lg text-black font-large pb-5'>
                            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300">Men</a>
                        </li>
                        <li className='mx-4 text-lg text-black font-large pb-5'>
                            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300">Women</a>
                        </li>
                        <li className='mx-4 text-lg text-black font-large pb-5'>
                            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300">About</a>
                        </li>
                        <li className='mx-4 text-lg text-black font-large pb-5'>
                            <a href="#" className="hover:border-b-2 border-orange transition-all duration-300">Contract</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuModal