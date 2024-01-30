import { FaAngleDown, } from "react-icons/fa";
import Searchbar from "./Searchbar";
import FirstNestedMenu from "./FirstNestedMenu";
import SecondNestedMenu from "./SecoundNestedMenu";
import ThirdNestedMenu from "./ThirdNestedMenu";
import MobileNav from "./MobileNav";
import MobileSearchbar from "./MobileSearchbar";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <div className="left flex gap-6 items-center">
          <MobileNav />
          <div className="logo">
            <h1 className="text-3xl font-bold text-grn"> Jobs</h1>
          </div>
          <ul className="hidden lg:flex gap-3 items-center ">
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
              <span> Find Tallent </span>
              <FaAngleDown className="group-hover:rotate-180 duration-300" />
              {/* Nested Menu bar */}
              <FirstNestedMenu />
            </li>
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
             <span> Find Work </span> 
             <FaAngleDown className="group-hover:rotate-180 duration-300" />
             {/* Nested Menu bar */}
             <SecondNestedMenu/>
            </li>
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
              <span> Why Us </span>
              <FaAngleDown className="group-hover:rotate-180 duration-300" />
              {/* Nested Menu bar */}
              <ThirdNestedMenu />
            </li>
            <li className=" py-3 md:py-5 cursor-pointer">
              <span> Enterprise </span>
            </li>
          </ul>
        </div>
        <div className="right flex items-center gap-3 py-3 lg:py-5">
          {/* Input field */}          
          <Searchbar />
          <button className="hover:text-grn duration-300"> Login</button>
          <button className="border-2 border-grn rounded-full py-1 px-3 text-grn hover:bg-grn hover:text-white duration-300 hidden md:inline-block"> Sign Up</button>
          <MobileSearchbar />
        </div>
      </div>
    </nav>
  );
};




export default Navbar;
