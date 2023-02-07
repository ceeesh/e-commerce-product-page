import React, { useContext, useEffect } from 'react'
import prodThmb from '../../../images/image-product-4.jpg'
import deleteIcon from '../../../images/icon-delete.svg'
import { Context } from '../context/context'

const CartModal = () => {
    const { cartNum, setCartNum, amount, setAmount, quantity } = useContext(Context)

    const emptyCart = () => {
        setCartNum(0)
    }

    useEffect(() => {
        setAmount(prevState => prevState * quantity)
    }, [cartNum])

    return (
        <div className="container absolute right-60 top-24 shadow-2xl bg-white w-[20rem] h-[13rem] rounded flex flex-col text-left shadow-gray-900 z-10 ">
            <div className="border-b-2 p-4 border-gray">
                <p>Cart</p>
            </div>

            {cartNum === 0 ? (
                <div className="m-auto">Your cart is Empty</div>
            ) : (
                <div className="p-4 flex flex-col ">
                    <div className="flex mb-5 justify-between items-center">
                        <img src={prodThmb} className="w-[3rem] h-[3rem] rounded block mr-3" />
                        <p className="text-darkgray font-normal text-[0.9rem]">Fall Limited Edition Sneakers $125.00 x <span> {cartNum} </span> <span className="font-bold text-black">${amount}</span></p>
                        <img src={deleteIcon} className="block clickable" onClick={emptyCart} />
                    </div>
                    <button className="w-full bg-orange rounded text-white p-3">Checkout</button>
                </div>
            )}


        </div>
    )
}

export default CartModal