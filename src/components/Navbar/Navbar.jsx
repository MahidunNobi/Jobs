import { FaAngleDown, FaAngleRight, FaArrowRight   } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import Searchbar from "./Searchbar";
import FirstNestedMenu from "./FirstNestedMenu";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="left flex gap-6 items-center">
          <div className="logo">
            <h1 className="text-3xl font-bold text-grn"> Jobs</h1>
          </div>
          <ul className="flex gap-3 items-center">
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
              <span> Find Tallent </span>
              <FaAngleDown className="group-hover:rotate-180 duration-300" />
              {/* Nested Menu bar */}
              <FirstNestedMenu />
            </li>
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
             <span> Find Work </span> 
             <FaAngleDown className="group-hover:rotate-180 duration-300" />
            </li>
            <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
              <span> Why Us </span>
              <FaAngleDown className="group-hover:rotate-180 duration-300" />
            </li>
            <li>
              <span> Enterprise </span>
            </li>
          </ul>
        </div>
        <div className="right flex items-center gap-3">
          {/* Input field */}          
          <Searchbar />
          <button className="hover:text-grn duration-300"> Login</button>
          <button className="border-2 border-grn rounded-full py-1 px-3 text-grn hover:bg-grn hover:text-white duration-300"> Sign Up</button>
        </div>
      </div>
    </nav>
  );
};




export default Navbar;