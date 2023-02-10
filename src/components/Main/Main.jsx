import { useContext, useState } from 'react'
import image1 from '../../../images/image-product-1.jpg'
import image2 from '../../../images/image-product-2.jpg'
import image3 from '../../../images/image-product-3.jpg'
import image4 from '../../../images/image-product-4.jpg'
import iconCart from '../../../images/icon-cart.svg'
import { Context } from '../context/context'
import SliderModal from './SliderModal'

const Main = () => {

    const { quantity, setQuantity, cartNum, setCartNum, sliderModal, setSliderModal } = useContext(Context)
    const slides = [image1, image2, image3, image4]
    const [currentIndex, setCurrentIndex] = useState(2)

    const selectImage = (index) => {
        setCurrentIndex(index)
        console.log(currentIndex)
    }

    const addQuantity = () => {
        setQuantity(prevState => prevState + 1)
    }

    const minusQuantity = () => {
        setQuantity(prevState => prevState - 1)
    }

    const addToCart = () => {
        setCartNum(prevState => Number(prevState += quantity))
    }

    const openModal = () => {
        setSliderModal(prevState => !prevState)
    }

    return (
        <div className={`container xl:max-w-[calc(100% - 9rem)] lg:w-5/5 md:w-10/12 m-0 sm:mx-auto md:mx-12 lg:mx-auto mt-10 md:mt-24 
        h-max md:flex-row flex flex-col justify-between font-semibold gap-20 overflow-y-auto overflow-x-hidden sm:h-fit ${sliderModal ? `h-20` : null }`}>
            <div className="flex flex-col w-[100%] md:w-[90%] lg:w-[40%]">
                <div className="w-full">
                    <img src={slides[currentIndex]}
                        className="w-full cursor-pointer sm:rounded-2xl transform transition-all hover:scale-90 hover:shadow-2xl duration-500"
                        onClick={openModal} />
                </div>
                <div className="flex justify-between mt-3 sm:mt-7 w-full">
                    {slides.map((slide, index) => (
                        <img src={slide} key={index}
                            className="sm:w-[22%] w-[18%] rounded-2xl cursor-pointer mx-2  transform transition-all hover:scale-110 hover:shadow-2xl duration-500"
                            onClick={() => selectImage(index)} />
                    ))}
                </div>
            </div>
            <div className="w-[100%] md:w-[40%] lg:w-[60%] flex flex-col p-5 sm:m-2 lg:p-5 lg:m-10">
                <p className="text-base text-orange font-large pb-4">SNEAKER COMPANY</p>
                <h1 className="text-4xl font-bold pb-4 lg:text-6xl">Fall Limited Edition Sneakers</h1>
                <p className="text-darkgray font-normal pb-4">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <span className="flex text-center items-center pb-4">
                    <p className="font-black text-2xl ">$125.00</p>
                    <p className="text-orange font-large text-xl bg-lightorange ml-2 rounded p-1 text-[1rem]">50%</p>
                </span>
                <span className="text-gray pb-2 line-through decoration-2">$250.00</span>
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="w-full lg:w-[30%] bg-lightgray flex justify-between h-14 rounded-xl mr-8 mb-2">
                        <button className="w-12 flex justify-center items-center text-orange text-3xl h-12" onClick={quantity < 1 ? null : minusQuantity}>-</button>
                        <span className="w-12 flex justify-center items-center text-1xl h-12">{quantity}</span>
                        <button className="w-12 flex justify-center items-center text-orange text-3xl h-12" onClick={quantity > 10 ? null : addQuantity}>+</button>
                    </div>

                    <div
                        className="w-full lg:w-[45%] bg-orange flex h-14 rounded-xl justify-center md:p-15 items-center cursor-pointer  
                    transform transition-all hover:scale-110 hover:shadow-2xl hover:bg-orpac duration-500"
                        onClick={addToCart}>
                        <button className="flex justify-center items-center text-white"><img src={iconCart} className="text-white mr-3" /> Add to Cart</button>
                    </div>
                </div>
            </div>
            {sliderModal && (<SliderModal />)}
        </div>
    )
}

export default Main