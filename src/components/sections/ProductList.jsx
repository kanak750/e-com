import prodimg from "../../images/westerwear.jpg";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductList = () => {
  const [listType, setListType] = useState("grid-cols-5");
  const [cardDimensions, setCardDimensions] = useState({
    dimensions: "w-60 h-auto",
    photoDimensions: "",
    layout: "",
    buttonLayout: "flex-row justify-between",
    icon: <BsGrid3X3GapFill />,
  });

  const divs = [];

  for (let i = 0; i <= 10; i++) {
    divs.push(
      <div
        className={`productCard ${cardDimensions.dimensions} bg-white rounded-2xl p-2 space-y-1 ${cardDimensions.layout}`}
      >
        <div className="prodImg rounded-2xl">
          <img
            src={prodimg}
            className={`${cardDimensions.photoDimensions} rounded-2xl`}
            alt="product image"
          />
        </div>
        <div className="flex-grow">
        <div className="prodTitle font-bold text-lg">Printed Dress</div>
        <div className="prodDesc text-xs text-slate-700">
          A printed western dress for women , available in all sizes
        </div>
        </div>
        <div className="prodActions space-y-2">
          <div className="prodPrice flex font-bold text-md">
            <HiCurrencyRupee fontSize={24} />
            500
          </div>
          <div className="shippingtype text-xs font-light text-green-600">
            FREE Delivery
          </div>
          <div className={`flex ${cardDimensions.buttonLayout} space-y-1`}>
            <button className=" details text-sm bg-blue-700 text-white font-bold rounded-lg p-2">
              Details
            </button>
            <button className="addtowlist flex flex-row text-sm font-bold rounded-lg items-center p-2 border border-black">
              <FaRegHeart fontSize={18} /> Add to wishlist
            </button>
          </div>
        </div>
      </div>
    );
  }

  function listToggle() {
    listType === "grid-cols-5"
      ? setListType("grid-cols-1")
      : setListType("grid-cols-5");
    cardDimensions.dimensions === "w-60 h-auto"
      ? setCardDimensions({
          ...cardDimensions,
          dimensions: "w-full h-36",
          photoDimensions: "w-24",
          layout: " flex flex-row space-x-5 items-center",
          buttonLayout: "flex-col",
          icon: <ImList />,
        })
      : setCardDimensions({
          ...cardDimensions,
          dimensions: "w-60 h-auto",
          photoDimensions: "",
          layout: "",
          buttonLayout: "flex-row justify-between",
          icon: <BsGrid3X3GapFill />,
        });
  }

  return (
    <div>
      <div className="w-full flex justify-end">
      <button
        className=" bg-slate-700 text-teal-100 p-2 m-1 rounded-sm "
        onClick={() => listToggle()}
      >
        {cardDimensions.icon}
      </button>
      </div>
      
      <div className={`grid ${listType}  gap-4 bg-slate-200 p-2`}>{divs}</div>
    </div>
  );
};

export default ProductList;
