import Carousel from "../sections/Carousel";
import clothing from "../../images/clothing.jpg";
import electronics from "../../images/electronics.jpg";
import mobiles from "../../images/mobiles.jpg";
import headphones from "../../images/headphones.jpg";
import clothing_h from "../../images/clothing_h.png";
import electronic_h from "../../images/electronics_h.png";
import mobile_h from "../../images/mobile_h.png";
import headphone_h from "../../images/headphone_h.png";
import Category from "../sections/Category";
import clothing_thumb from "../../images/clothing_thumb.png";
import electronic_thumb from "../../images/electronic_thumb.png";
import mobile_thumb from "../../images/mobile_thumb.png";
import headphone_thumb from "../../images/headphone_thumb.png";
import casual_thumb from "../../images/casual_thumb.png";
import washing_thumb from "../../images/washing_thumb.png";
import CategoryCarousel from "../sections/CategoryCarousel";

import { GrUserFemale } from "react-icons/gr";

import westernwear from "../../images/westerwear.jpg";
import ethnicwear from "../../images/ethnic.jpg";
import sarees from "../../images/saree.jpg";
import winterwear from "../../images/winterwear.jpg";

import { FaUser } from "react-icons/fa";

import menstopwear from "../../images/mentopwear.jpg";
import mensbottomwear from "../../images/menbottomwear.jpg";
import menskurta from "../../images/menkurta.jpg";
import menstracksuit from "../../images/mentracksuit.jpg";

import { MdOutlineChildCare } from "react-icons/md";

import girlsdresses from "../../images/girldress.jpg";
import boygirltshirt from "../../images/boygirltshirt.jpg";
import boygirljeans from "../../images/boygirljeans.jpg";
import infantwear from "../../images/infantwear.jpg";

import { PiTelevisionSimpleDuotone } from "react-icons/pi";

import androidtv from "../../images/androidtv.jpg"
import fourktv from "../../images/4ktv.jpg"
import redmitv from "../../images/redmitv.jpg"
import samsungtv from "../../images/samsungtv.jpg"


import { FaLaptop } from "react-icons/fa";

import gaminglaptop from "../../images/gaminglaptop.jpg"
import windowslaptop from "../../images/windowslaptop.jpg"
import macbook from "../../images/macbook.jpg"
import chromebook from "../../images/chromebook.jpg"

import { GiWashingMachine } from "react-icons/gi";

import premium from "../../images/premium.jpg"
import frontload from "../../images/frontload.jpg"
import topload from "../../images/topload.jpg"
import semiautomatic from "../../images/semiautomatic.jpg"

import { FaUtensils } from "react-icons/fa";

import dishwasher from "../../images/dishwasher.jpg"

import { GrMonitor } from "react-icons/gr";

import hdmonitor from "../../images/hdmonitor.jpg"
import sizeofmonitor from "../../images/sizeofmonitor.jpg"


const Homepage = () => {
  const carouselData = [
    {
      url: clothing,
      alt: "clothing",
      heroText: "Wardrobe Essentials: Discover Your Style Staples!",
      heroImg: clothing_h,
    },
    {
      url: electronics,
      alt: "electronics",
      heroText: "Unbox Tomorrow's Tech Today: Shop Our New Arrivals!",
      heroImg: electronic_h,
    },
    {
      url: mobiles,
      alt: "mobiles",
      heroText: "Tech Evolution: Embrace the Future with Our Mobile Selection!",
      heroImg: mobile_h,
    },
    {
      url: headphones,
      alt: "headphones",
      heroText: "Tune into Luxury: Stylish Headphones for Every Beat!",
      heroImg: headphone_h,
    },
  ];

  const categoryData = [
    { cat_name: "Shirts", cat_img: clothing_thumb },
    { cat_name: "Laptops", cat_img: electronic_thumb },
    { cat_name: "Headphones", cat_img: headphone_thumb },
    { cat_name: "Mobiles", cat_img: mobile_thumb },
    { cat_name: "Casuals", cat_img: casual_thumb },
    { cat_name: "Washing Machine", cat_img: washing_thumb },
  ];

  const categoryListData = [
    {
      cat_name: "Clothing",
      cat_sublist: [
        {
          sub_title: "Women",
          avatar: <GrUserFemale />,
          sub_items: [
            { item_name: "Western Wear", item_img: westernwear },
            { item_name: "Ethnic Wear", item_img: ethnicwear },
            { item_name: "Sarees", item_img: sarees },
            { item_name: "Winter Wear", item_img: winterwear },
          ],
        },
        {
          sub_title: "Men",
          avatar: <FaUser />,
          sub_items: [
            { item_name: "Men's Top Wear", item_img: menstopwear },
            { item_name: "Men's Bottom Wear", item_img: mensbottomwear },
            { item_name: "Men's Kurtas", item_img: menskurta },
            { item_name: "Men's Track Suit", item_img: menstracksuit },
          ],
        },
        {
          sub_title: "Kids",
          avatar: <MdOutlineChildCare />,
          sub_items: [
            { item_name: "Girls Dresses", item_img: girlsdresses },
            { item_name: "Boys & Girls Tshirts", item_img: boygirltshirt },
            { item_name: "Boys & Girls Jeans", item_img: boygirljeans },
            { item_name: "Infant Wear", item_img: infantwear },
          ],
        },
      ],
    },
    {
      cat_name: "Electronics",
      cat_sublist: [
        {
          sub_title: "Television",
          avatar: <PiTelevisionSimpleDuotone />,
          sub_items: [
            { item_name: "Android tv", item_img: androidtv },
            { item_name: "4k tv", item_img: fourktv },
            { item_name: "Redmi tv", item_img: redmitv },
            { item_name: "Samsung tv", item_img: samsungtv },
          ],
        },
        {
          sub_title: "Laptops",
          avatar: <FaLaptop />,
          sub_items: [
            { item_name: "Gaming Laptop", item_img: gaminglaptop },
            { item_name: "Windows Laptop", item_img: windowslaptop },
            { item_name: "MacBook", item_img: macbook },
            { item_name: "Chromebook", item_img: chromebook },
          ],
        },
        {
          sub_title: "Washing Machine",
          avatar: <GiWashingMachine />,
          sub_items: [
            { item_name: "Top Load", item_img: topload },
            { item_name: "Front Load", item_img: frontload },
            { item_name: "Semi Automatic", item_img: semiautomatic },
            { item_name: "Premium", item_img: premium },
          ],
        },
        {
          sub_title: "Dish Washer",
          avatar: <FaUtensils />,
          sub_items: [
            { item_name: "Up to 8 place settings", item_img: dishwasher },
            { item_name: "11 to 12 place settings", item_img: dishwasher },
            { item_name: "13 to 14 place settings", item_img: dishwasher },
            { item_name: "15 place settings & above", item_img: dishwasher },
          ],
        },
        {
          sub_title: "Monitors",
          avatar: <GrMonitor />,
          sub_items: [
            { item_name: "By Screen Quality", item_img: hdmonitor },
            { item_name: "by Screen Size", item_img: sizeofmonitor },
            { item_name: "By Aspect Ratio", item_img: sizeofmonitor },
            { item_name: "By Display Type", item_img: hdmonitor },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <section className="hero-section">
        <Carousel slides={carouselData} />
        <Category category={categoryData} />
        {categoryListData.map(cat => <CategoryCarousel cat={cat} />)}
      </section>
    </div>
  );
};

export default Homepage;
