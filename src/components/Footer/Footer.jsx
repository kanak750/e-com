import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterLogo from "../../images/FooterLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Footer = () => {
  return (
    <div className="footer p-4 flex flex-col md:flex-row space-y-2 justify-evenly bg-gray-900 text-slate-100 ">
      <div className="flex flex-col space-y-5">
        <img className="w-44"  src={FooterLogo} />
        <span className="text-center md:text-left md:w-64">Explore Shop-e-Hub – Your go-to destination online. Discover trendy fashion, cutting-edge gadgets, and essential products hassle-free!</span>
        <div className="social-icons space-x-5">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="fa-icon" />
          <FontAwesomeIcon icon={faFacebookF} size="lg" className="fa-icon" />
          <FontAwesomeIcon icon={faInstagram} size="lg" className="fa-icon" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">

      <ul className="font-semibold text-white text-lg space-y-2 f-categories">
        <li className="headline text-sm font-bold text-slate-400">Clothing</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Casuals</li>
        <li>Formals</li>
      </ul>


      <ul className="font-semibold text-white text-lg space-y-2 f-categories">
        <li className="headline text-sm font-bold text-slate-400">Electronics</li>
        <li>Television</li>
        <li>Laptops</li>
        <li>Washing Machine</li>
        <li>Dishwasher</li>
        <li>Monitors</li>
      </ul>


      <ul className="font-semibold text-white text-lg space-y-2 f-categories">
        <li className="headline text-sm font-bold text-slate-400">Mobiles</li>
        <li>Budget Phones</li>
        <li>Gaming Phones</li>
        <li>High End Phones</li>
        <li>Feature Phones</li>
        <li>Camera Phones</li>
      </ul>


      <ul className="font-semibold text-white text-lg space-y-2 f-categories">
        <li className="headline text-sm font-bold text-slate-400">Headphones</li>
        <li>In-ear</li>
        <li>Over-the-ear</li>
        <li>On-ear</li>
        <li>Wired Headphones</li>
        <li>Wireless Headphones</li>
      </ul>
      </div>

    </div>
  )
}

export default Footer