import { FaAngleDown, FaAngleUp, FaSearch  } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="hidden md:flex items-center border border-gray-300 hover:bg-gray-200 duration-200 rounded-full">
            {/* Search Icon and Input field */}
            <div className="rounded-full flex items-center relative">
              <FaSearch className="text-xl text-gray-500 absolute left-2" />
              <input 
              type="text" 
              placeholder="Search" 
              className="outline-none bg-transparent py-1 pl-9 hover:bg-white duration-100 rounded-full border-2 border-transparent focus:border-gray-400 "
              />
            </div>
            {/* Select options section */}
            <div className="group py-1 pl-3 pr-2 hover:bg-white duration-100 rounded-full border-2 border-transparent focus:border-gray-400 cursor-pointer relative">
              <p className="flex gap-2 items-center"> 
                <span className="font-medium"> Talent  </span>
                <FaAngleDown />
              </p>
              {/* Select Options Container*/}
              <div className="absolute hidden group-hover:block top-9 -left-5 min-w-[230px] bg-white shadow-lg shadow-gray-500 rounded-lg py-2">
                <div className="flex gap-1 py-1 px-2 hover:bg-grn/10">
                  <div className="icon">
                    <AiOutlineUsergroupDelete className=" mt-[3px]" />
                  </div>
                  <div className="desc">
                    <h5 className="font-medium"> Talent</h5>
                    <span className="text-xs text-gray-400"> Hire professionals and Agencies</span>
                  </div>
                </div>
                <div className="flex gap-1 py-1 px-2 hover:bg-grn/10">
                  <div className="icon">
                    <HiOutlineClipboardDocumentCheck className=" mt-[3px]" />
                  </div>
                  <div className="desc">
                    <h5 className="font-medium"> Projects</h5>
                    <span className="text-xs text-gray-400"> Buy ready to start services</span>
                  </div>
                </div>
                <div className="flex gap-1 py-1 px-2 hover:bg-grn/10">
                  <div className="icon">
                    <IoBriefcaseOutline className=" mt-[3px]" />
                  </div>
                  <div className="desc">
                    <h5 className="font-medium"> Jobs</h5>
                    <span className="text-xs text-gray-400"> Apply on jobs posted by clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Searchbar