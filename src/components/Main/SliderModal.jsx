import React, { useContext, useState } from 'react'
import image1 from '../../../images/image-product-1.jpg'
import image2 from '../../../images/image-product-2.jpg'
import image3 from '../../../images/image-product-3.jpg'
import image4 from '../../../images/image-product-4.jpg'
import imageThumb1 from '../../../images/image-product-1-thumbnail.jpg'
import imageThumb2 from '../../../images/image-product-2-thumbnail.jpg'
import imageThumb3 from '../../../images/image-product-3-thumbnail.jpg'
import imageThumb4 from '../../../images/image-product-4-thumbnail.jpg'
import next from '../../../images/icon-next.svg'
import prev from '../../../images/icon-previous.svg'
import close from '../../../images/icon-close.svg'
import { Context } from '../context/context'

const SliderModal = () => {
    const { setSliderModal } = useContext(Context)

    const slides = [image1, image2, image3, image4]
    const slidesThumb = [imageThumb1, imageThumb2, imageThumb3, imageThumb4]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const closeModal = () => {
        setSliderModal(prevState => !prevState)
    }

    return (
        <div className="absolute top-0 right-0 h-screen w-full  bg-opac  flex justify-center items-center flex-col ">
            <div className="flex justify-end items-end w-2/5">
                <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center"> <img src={close} onClick={closeModal} className="cursor-pointer" /></div>
            </div>
            <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className="w-[30rem] h-[30rem] rounded-2xl bg-center bg-cover duration-500 flex justify-between items-center">
                <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center"> <img src={prev} className="cursor-pointer" onClick={prevSlide} /></div>
                <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center"> <img src={next} className="cursor-pointer" onClick={nextSlide} /></div>
            </div>

            <div className="flex justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={(() => goToSlide(slideIndex))}
                        className="flex w-full mt-7 mx-[0.6rem]"
                    >
                        <img src={slide} className="w-[105px] rounded-2xl cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderModal