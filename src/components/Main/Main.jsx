import { useContext, useState } from 'react'
import imageProd1 from '../../../images/image-product-1.jpg'
import imageThumb2 from '../../../images/image-product-2-thumbnail.jpg'
import imageThumb3 from '../../../images/image-product-3-thumbnail.jpg'
import imageThumb4 from '../../../images/image-product-4-thumbnail.jpg'
import imageThumb1 from '../../../images/image-product-1-thumbnail.jpg'
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
    const [currentIndex, setCurrentIndex] = useState(0)
    
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
        <div className="container mt-24 mx-40 w-full h-max flex justify-between font-semibold gap-20">
            <div className="flex flex-col w-[40%]">
                <div className="">
                    <img src={slides[currentIndex]} className="w-full rounded-3xl cursor-pointer" onClick={openModal} />
                </div>
                <div className="flex w-full justify-between mt-7 ">
                    {slides.map((slide, index) => (
                        <img src={slide} key={index} className="w-[105px] rounded-2xl cursor-pointer" onClick={() => selectImage(index)}/>
                    ))}
                </div>

            </div>
            <div className="w-[60%] flex flex-col p-5 m-10">
                <p className="text-base text-orange font-medium pb-4">SNEAKER COMPANY</p>
                <h1 className="text-6xl font-bold pb-4">Fall Limited Edition Sneakers</h1>
                <p className="text-darkgray font-normal pb-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <span className="flex text-center items-center pb-4">
                    <p className="font-bold text-2xl ">$125.00</p>
                    <p className="text-orange font-medium text-xl ">50%</p>
                </span>
                <span className="text-gray pb-2">$250.00</span>
                <div className="flex w-full">
                    <div className="w-[25%] bg-lightgray flex justify-between h-14 rounded-xl mr-8">
                        <button className="w-12 flex justify-center items-center text-orange text-3xl h-12" onClick={quantity < 1 ? null : minusQuantity}>-</button>
                        <span className="w-12 flex justify-center items-center text-1xl h-12">{quantity}</span>
                        <button className="w-12 flex justify-center items-center text-orange text-3xl h-12" onClick={quantity > 10 ? null : addQuantity}>+</button>
                    </div>

                    <div className="w-[35%] bg-orange flex h-14 rounded-xl justify-center items-center cursor-pointer" onClick={addToCart}>
                        <button className="flex justify-center items-center text-white"><img src={iconCart} className="text-white mr-3" /> Add to Cart</button>
                    </div>
                </div>
            </div>
            {sliderModal && (<SliderModal />)}
        </div>
    )
}

export default Main