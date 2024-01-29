import { FaArrowRight   } from "react-icons/fa";

const ThirdNestedMenu = () => {
  return (
    <div className="w-screen hidden group-hover:block absolute top-[60px] left-0 bg-white text-gray-800 shadow-md">
      {/* Menubar container */}
      <div className="container mx-auto py-12 flex gap-10">

        <ul className="flex gap-6 flex-wrap max-w-[40%]">
            <li className="p-4 rounded-lg hover:bg-grn/10 max-w-[200px]">
                <h5 className="font-medium mb-3"> Success Stories </h5>
                <span className="text-sm">  Discover how teams work strategically and grow together.  </span>
            </li>
            <li className="p-4 rounded-lg hover:bg-grn/10 max-w-[200px]">
                <h5 className="font-medium mb-3">  Reviews  </h5>
                <span className="text-sm"> See what it’s like to collaborate on Upwork. </span>
            </li>
            <li className="p-4 rounded-lg hover:bg-grn/10 max-w-[200px]">
                <h5 className="font-medium mb-3">  How to find work  </h5>
                <span className="text-sm">   Learn about how to grow your independent career.   </span>
            </li>
            <li className="p-4 rounded-lg hover:bg-grn/10 max-w-[200px]">
                <h5 className="font-medium mb-3">  How to hire  </h5>
                <span className="text-sm text">   Learn about the different ways to get work done.   </span>
            </li>
        </ul>

        <div>
            <h5 className="font-medium">Where work gets done</h5>
            <ul className="w-[350px] my-4">
                <li className="px-6 py-2 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Getting started as a freelancer</p>
                </li>
                <li className="px-6 py-2 my-3 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Growing your freelance career</p>
                </li>
                <li className="px-6 py-2 rounded-lg hover:bg-grn/10 border border-gray-300">
                    <span className="text-xs mb-2"> Guids</span>
                    <p className="">Hiring & Working with indepent talent</p>
                </li>
            </ul>
            <a href="" className="text-grn flex justify-between items-center text-sm max-w-[160px] underline hover:no-underline">
                <span className="font-bold">  See Resources </span>
                <FaArrowRight />
            </a>
        </div>


      </div>
    </div>
  );
};

export default ThirdNestedMenu;
