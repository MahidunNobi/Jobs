import { AiOutlineApple } from "react-icons/ai";
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="pt-6 lg:pt-16">
      <div className="container mx-auto md:rounded-tl-lg md:rounded-tr-lg bg-dark-grn text-white py-6 md:py-12 px-6 md:px-10">
        {/* Menus */}
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* For Clients */}
          <ul>
            <li className="mb-3"> For Clients</li>
            <li> How to Hire </li>
            <li>Talent Marketplace </li>
            <li>Project Catalog </li>
            <li>Hire an Agency </li>
            <li>Enterprise </li>
            <li>Any Hire </li>
            <li>Contract-to-Hire </li>
            <li>Direct Contracts </li>
            <li>Hire Worldwide </li>
            <li>Hire in the USA </li>
          </ul>
          {/* For Talent */}
          <ul>
            <li className="mb-3"> For Talent</li>
            <li> How to Find Work</li>
            <li>Direct Contracts</li>
            <li>Find Freelance Jobs Worldwide</li>
            <li>Find Freelance Jobs in the USA</li>
          </ul>
          {/* Resources */}
          <ul>
            <li className="mb-3"> Resources</li>
            <li> Help & Support </li>
            <li> Success Stories </li>
            <li> Upwork Reviews </li>
            <li> Resources </li>
            <li> Blog </li>
            <li> Community </li>
            <li> Affiliate Program </li>
            <li> Free Business tools </li>
          </ul>
          {/* Company */}
          <ul>
            <li className="mb-3"> Company</li>
            <li> About Us</li>
            <li> Leadership</li>
            <li> Investor Relations</li>
            <li> Careers</li>
            <li> Our Impact</li>
            <li> Press</li>
            <li> Contact Us</li>
            <li> Trust, Safety & Security</li>
            <li> Modern Slavery Statement</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-6">
          {/* Social Links */}
          <div className="flex items-center flex-col md:flex-row gap-3 mb-6 md:mb-0">
            <h6 className="text-xl"> Follow Us:</h6>
            <div className="space-x-3">
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <CiFacebook />
              </button>
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <CiLinkedin />
              </button>
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <FaXTwitter />
              </button>
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <CiYoutube />
              </button>
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <CiInstagram />
              </button>
            </div>
          </div>
          {/* Mobile apps */}
          <div className="flex items-center gap-3">
            <h6 className="text-xl"> Mobile Apps:</h6>
            <div className="space-x-3">
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <AiOutlineApple />
              </button>
              <button className="rounded-full border border-white hover:bg-white/60 text-2xl p-2">
                <IoLogoAndroid />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        {/* Last section */}
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <li className="mr-0 md:mr-6">
            &copy; 2015 - 2024 Upwork® Global Inc.
          </li>
          <li className="hover:underline no-underline cursor-pointer mr-0 md:mr-3">
            Terms of Service
          </li>
          <li className="hover:underline no-underline cursor-pointer mr-0 md:mr-3">
            Privacy Policy
          </li>
          <li className="hover:underline no-underline cursor-pointer mr-0 md:mr-3">
            CA Notice at Collection
          </li>
          <li className="hover:underline no-underline cursor-pointer mr-0 md:mr-3">
            Cookie Settings
          </li>
          <li className="hover:underline no-underline cursor-pointer mr-0 md:mr-3">
            Accessibility
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
