import { useState } from "react";
import shoe1 from "../../images/shoe1.jpg";
import shoe2 from "../../images/shoe2.jpg";
import shoe3 from "../../images/shoe3.jpg";
import shoe4 from "../../images/shoe4.jpg";
import shoe5 from "../../images/shoe5.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const ItemInfo = () => {

const [currentImage,setCurrentImage] = useState(shoe1);
const imageArray = [shoe1,shoe2,shoe3,shoe4,shoe5];

    return (
    <div className="grid grid-cols-2 bg-slate-50">
        <div className="imgSection p-3">
            <img src={currentImage} className="rounded-3xl w-2/3 m-2" />
            <div className="grid grid-cols-4 gap-1 w-3/4">
                {imageArray.map(item => {if(item !== currentImage){
return <img src={item}  className="rounded-3xl w-3/4" onClick={() => setCurrentImage(item)} />
                }})}
            </div>
        </div>

        <div className="detailSection flex flex-col justify-center space-y-2">
            <div className="companyName text-xs text-orange-300 font-bold uppercase">asian</div>
            <div className="productTitle font-bold text-4xl">Sports Shoes For Men</div>
            <div className="productDesc text-sm text-slate-400 w-1/2">Great shoes for daily usage. Featuring a durable rubber outer sole. Durable in rough and tough use.</div>
            <div className="price font-bold text-lg flex items-center"><MdCurrencyRupee />999</div>
            <div className="flex space-x-2">
                <div className="quantityButton flex items-center bg-gray-200  rounded-xl justify-evenly">
                    <button className="font-bold text-orange-600 px-3 text-lg">-</button>
                    <div className="px-3 ">0</div>
                    <button  className="font-bold text-orange-600 px-3 text-lg">+</button>
                </div>
                <button className="addToCart px-8 py-4 rounded-xl text-white bg-orange-500 flex items-center space-x-1"><span><FaShoppingCart /></span><span>Add to cart</span></button>
            </div>
        </div>
    </div>
  )
}

export default ItemInfo