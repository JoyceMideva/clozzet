import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.png";
import  phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import  twitter from "../assets/images/twitter.png";
function Footer() {
  return (
    <div className=" mx-auto pt-2 bg-slate-200 text-lg ">
      <h2 className="text-center text-4xl">Subscribe & get up to 30% OFF</h2>
      <div className=" flex gap-7 justify-center pt-10 mx-auto">
        <input
          className="rounded-full bg-rose border-2  border-[#45c9a1] outline-none  py-4 px-12"
          type="email"
          placeholder="Enter your email"
        />
        <button className=" bg-[#45c9a1]  rounded-full font-bold text-[#fff] text-lg py-4 px-12">subscribe</button>
      </div>
      <div className="flex gap-5 justify-between">
      <div className="pt-10 w-40">
        <img  width={130} src={logo} alt="" />
        <p className="text-xl w-60">
          Offering a unique and stylish perspective on fashion is our number one
          priority. Confuse your mirror by our trendy outfits.
        </p>
      </div>
      <div className="pt-10">
        <h3 className="font-bold">Store</h3>
        <ul>

        <li>Women’s Fashion</li>
        <li>Men’s Fashion</li>
        <li>Store Sale </li>
        <li>Collections</li>
        </ul>
      </div>
      <div>
      <h3 className="font-bold text-lg">Help</h3>
      <ul>

        <li>Customer Support</li>
        <li>Terms& Conditions</li>
        <li>Privacy Policy</li>
        <li>Track Your Order</li>
      </ul>
      </div>
      <div className="">
      <h3 className="font-bold">  Contact Us</h3>
      
        <div className="flex gap-4">
      <img  width={40} src={email} alt="" />
         <h5>contact@clozzet.com</h5>
         </div>
         <div className="flex gap-4">
        <img  width={40}src={phone} alt="" /> 
        <h5>254-700-333-333</h5>
        </div>
        <h4>Follow Us</h4>
        <div className="flex gap-4">
        <img width={40} src={facebook} alt="" />
        <img width={40} src={instagram} alt="" />
        <img width={40} src={twitter} alt="" />
        </div>
      
      </div>
    </div>
    </div>
  );
}
export default Footer;
