"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DextopLeftSection from "./DextopLeftSection";
import DextopRightSection from "./DextopRightSection";
import MobileNav from "./MobileComponants/MobileNav";

const Navbar = () => {
  const path = usePathname();
  if (path === "/login" || path === "/signup") {
    return (
      <nav className="border-b border-gray-300 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <Link href={"/"} className="logo py-3 lg:py-5">
            <h1 className="text-3xl font-bold text-grn"> Jobs</h1>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b border-gray-300 sticky top-0 bg-white">
      <div className="container mx-auto px-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="left flex gap-6 items-center">
          {/* Navigation for mobile */}
          <MobileNav />
          {/* Logo */}
          <Link href={"/"} className="logo py-3 lg:py-5">
            <h1 className="text-3xl font-bold text-grn"> Jobs</h1>
          </Link>
          {/* Dextop Navigation menu */}
          <DextopLeftSection />
        </div>
        {/* Right Section */}
        <DextopRightSection />
      </div>
    </nav>
  );
};

export default Navbar;
