import React from 'react'
import imageProd1 from '../../../images/image-product-1.jpg'
import imageThumb2 from '../../../images/image-product-2-thumbnail.jpg'
import imageThumb3 from '../../../images/image-product-3-thumbnail.jpg'
import imageThumb4 from '../../../images/image-product-4-thumbnail.jpg'
import imageThumb1 from '../../../images/image-product-1-thumbnail.jpg'

const Main = () => {
    return (
        <div className="container mt-24 mx-40 w-full h-max flex justify-between ">
            <div className="flex flex-col w-[30%]">
                <div className="">
                    <img src={imageProd1} className="w-full rounded-3xl" />
                </div>
                <div className="flex w-full justify-between mt-7 ">
                    <img src={imageThumb2} className="w-[105px] rounded-2xl" />
                    <img src={imageThumb3} className="w-[105px] rounded-2xl" />
                    <img src={imageThumb4} className="w-[105px] rounded-2xl" />
                    <img src={imageThumb1} className="w-[105px] rounded-2xl" />
                </div>

            </div>
            <div className="w-[60%] flex flex-col p-5 m-10">
                <p className="text-base text-orange font-medium">Sneaker Company</p>
                <h1 className="text-6xl font-bold">Fall Limited Edition Sneakers</h1>
                <p className="text-darkgray font-normal">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <span className="flex text-center">
                    <p className="font-bold text-2xl">$125.00</p>
                    <p className="text-orange font-medium text-xl">50%</p>
                </span>
            </div>
        </div>
    )
}

export default Main