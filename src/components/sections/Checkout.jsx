import { FaRupeeSign } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import prodThumb from "../../images/shoe1.jpg";
import { useState } from "react";

function Checkout() {

    const [formVisibility, setFormVisibility] = useState("hidden");

  const maxOrderQuantity = 5;

  function quantValueArray(quant) {
    const valArray = [];
    for (let i = 1; i <= quant; i++) {
      valArray.push(i);
    }
    return valArray;
  }

function toggleFormVisibility() {
    formVisibility === "hidden" ? setFormVisibility("") : setFormVisibility("hidden")
}

  const quantOptions = quantValueArray(maxOrderQuantity);

  return (
    <div className="bg-white h-auto p-2 relative">
        <div className={`${formVisibility} absolute right-56  bg-white p-2 border border-slate-500 rounded w-1/3 space-y-1`}>
            <div className="flex flex-col">
                <label for="#dname">Name</label>
                <input className="p-1 border border-slate-600 rounded" id="dname" type="text" placeholder="Deliver To" />
            </div>
            <div className="flex flex-col">
                <label for="#daddress">Address</label>
                <input className="p-1 border border-slate-600 rounded" id="daddress" type="text" placeholder="Delivery Address" />
            </div>
            <button className="font-semibold p-2 bg-orange-500 text-white rounded">Submit</button>
        </div>
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="orderDetails  shadow-md shadow-slate-500 flex  justify-center items-center">
          <div className="flex flex-col w-1/2 space-y-5">
            <div className="finalPrice flex flex-col">
              <span className="text-xs text-gray-500">Your Total</span>
              <span className="font-semibold text-3xl space-x-1 flex items-center">
                <FaRupeeSign />
                999.00
              </span>
            </div>
            <div className="flex shadow-inner p-3 shadow-slate-300 space-x-2">
              <img src={prodThumb} className="w-8" />
              <div className="flex flex-col text-xs flex-grow">
                <div className="font-semibold capitalize">men's shoes</div>
                <div className="text-xs text-gray-400 space-x-1">
                  <span>Qty</span>
                  <select name="quantity" className="bg-white  font-bold">
                    {quantOptions.map((val) => (
                      <option className="text-black" value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="self-end font-semibold  space-x-1 flex items-center">
                <FaRupeeSign />
                999.00
              </div>
            </div>
            <div className="subtotal">
              <ul>
                <li className="flex justify-between">
                  <span className="font-semibold capitalize">subtotal</span>
                  <span className=" space-x-1 flex items-center">
                    <FaRupeeSign />
                    999.00
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold capitalize">shipping</span>
                  <span className=" space-x-1 flex items-center">
                    <FaRupeeSign />
                    0.00
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold capitalize">total due</span>
                  <span className=" space-x-1 flex items-center">
                    <FaRupeeSign />
                    999.00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="deliveryInfo   shadow-md shadow-slate-500 flex flex-col  justify-center p-2 space-y-1">
          <div className="shippinginfo w-2/3 space-y-2">
            <div className="font-semibold capitalize">shipping information</div>
            <div className="flex flex-col">
              <label
                for="#email"
                className="text-sm text-slate-500 me-1 font-semibold"
              >
                Email
              </label>
              <span
                id="email"
                className="text-sm border border-gray-500 p-1 rounded"
              >
                kanak@google.com
              </span>
            </div>
            <div className="flex flex-col">
              <label
                for="#address"
                className="text-sm text-slate-500 me-1 font-semibold"
              >
                Shipping address
              </label>
              <ul id="address" className="rounded p-1 border border-gray-500">
                <li>Kanak</li>
                <li>ABC Colony,Indore</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button className="p-1 rounded border border-gray-500 hover:bg-orange-500" onClick={() => toggleFormVisibility()}>
                <MdEdit />
              </button>
            </div>
          </div>
          <div className="paymentdetails  w-2/3 space-y-2">
          <div className="font-semibold capitalize">payment details</div>
            <div className="flex flex-col">
            <label
                for="#paymode"
                className="text-sm text-slate-500 me-1 font-semibold"
              >
                Mode of payment
              </label>
              <div id="paymode">
                <ul className="border border-gray-500 rounded w-1/2">
                    <li className="p-1 flex justify-between border">
                    <label for="#cod">Cash on delivery</label>
                    <input id="cod" type="checkbox" className=" accent-orange-500" />
                    </li>
                    <li className="p-1 flex justify-between border">
                    <label for="#upi">UPI</label>
                    <input id="upi" type="checkbox" className=" accent-orange-500" />
                    </li>
                    <li className="p-1 flex justify-between border">
                    <label for="#ccard">Credit Card</label>
                    <input id="ccard" type="checkbox" className=" accent-orange-500" />
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
          <button className="p-2 bg-orange-500 font-bold text-white rounded w-2/3 ">
            Proceed to pay
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
