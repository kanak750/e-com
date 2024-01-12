import HeaderLogo from "../../images/HeaderLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState("hidden");
  const [navBtnStyle,setNavBtnStyle] = useState("");

  function navMenu() {
    menuStatus === "hidden" ? setMenuStatus("") : setMenuStatus("hidden")
    navBtnStyle === "" ? setNavBtnStyle("rounded-t-lg bg-white") : setNavBtnStyle("")
   }



  return (
    <div>
    <div className="hidden md:block  p-4 md:flex justify-around">
        <img className="w-44"  src={HeaderLogo} />
        <div className="nav-links flex">
            <ul className=" flex flex-row space-x-4 self-center font-bold">
              <li>Home</li>
              <li className="text-orange-500">Shop</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className="cart-detail flex flex-row space-x-4 self-center  p-3">
          <div className="total-price text-lg font-semibold ">
          <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
          300.00
          </div>
          <div className="cart-button  relative  py-1 px-2">
            <div className="notification-dot absolute -top-2 right-0">
          <span class="inline-flex items-center rounded-full bg-amber-500 p-2.5 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 relative">
            <div className="absolute right-1 font-extrabold">02</div>
          </span>
          </div>
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </div>
        </div>
    </div>


    <div className="md:hidden p-4 flex justify-around">
        <img className="w-44"  src={HeaderLogo} />
        
        <div className="menu-button static">  
          <button className={`mt-1 p-2 pb-5 ${navBtnStyle}`} onClick={()=> navMenu()}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className={`${menuStatus}  nav-links m-2 flex flex-col bg-white rounded-lg p-2 absolute inset-x-0 top-16  z-20 `}>
          <div className="cart-detail flex flex-row justify-between  p-3">
          <div className="total-price text-lg font-semibold ">
          <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
          300.00
          </div>
          <div className="cart-button  relative  py-1 px-2">
            <div className="notification-dot absolute -top-2 right-0">
          <span class="inline-flex items-center rounded-full bg-amber-500 p-2.5 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 relative">
            <div className="absolute right-1 font-extrabold">02</div>
          </span>
          </div>
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </div>
        </div> 
            <ul className=" flex flex-col font-bold  px-10">
              <li>Home</li>
              <li className="text-orange-500">Shop</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
        </div>
        </div>
          
    </div>
    </div>
  )
}

export default Navbar