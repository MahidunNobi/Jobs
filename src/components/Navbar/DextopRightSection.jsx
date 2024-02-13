import Link from "next/link";
import MobileSearchbar from "./MobileComponants/MobileSearchbar";
import Searchbar from "./Searchbar";

const DextopRightSection = () => {
  return (
    <div className="right flex items-center gap-3 py-3 lg:py-5">
      {/* Input field */}
      <Searchbar />
      <Link href={"/login"} className="hover:text-grn duration-300">
        Login
      </Link>
      <Link
        href={"/signup"}
        className="border-2 border-grn rounded-full py-1 px-3 text-grn hover:bg-grn hover:text-white duration-300 hidden md:inline-block"
      >
        Sign Up
      </Link>
      <MobileSearchbar />
    </div>
  );
};

export default DextopRightSection;
