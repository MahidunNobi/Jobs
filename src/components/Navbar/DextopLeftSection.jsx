import { FaAngleDown } from "react-icons/fa";
import FirstNestedMenu from "./FirstNestedMenu";
import SecondNestedMenu from "./SecoundNestedMenu";
import ThirdNestedMenu from "./ThirdNestedMenu";

const DextopLeftSection = () => {
  // Raw Datas
  const FindAJob = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    " Writing & Translation",
    "Admin & Customers Support",
    "Finance & Accouting",
    "HR & Training",
    "Legal",
    " Engineering & Architecture",
    "Hire freelancers",
  ];

  const BrowseAndBuy = [
    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/logo.cd04b531.jpg",
      text: "Logo Design",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/blog.d73af7fb.jpg",
      text: "Article & Blogs",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/wp.1acec44b.jpg",
      text: "Wordpress",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/smm.1a3a67a0.jpg",
      text: "Social media manegment",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/video.8e2caeb1.jpg",
      text: "Video editing",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/seo.bb0c74c3.jpg",
      text: "SEO",
    },
  ];

  const GetAdvice = [
    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/web-programming.bba7813a.png",
      text: "Web programming",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/ai.b8aa0451.png",
      text: "AI & Mechine Learning",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/marketing.43b52b75.png",
      text: "Marketing Strategy",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/social-media.775752fd.png",
      text: "Social Media Marketing",
    },

    {
      img: "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/img/website-builders.6acb130a.png",
      text: "Website builders and CMS",
    },
  ];

  return (
    <ul className="hidden lg:flex gap-3 items-center ">
      <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
        <span> Find Tallent </span>
        <FaAngleDown className="group-hover:rotate-180 duration-300" />
        {/* Nested Menu bar */}
        <FirstNestedMenu
          FindAJob={FindAJob}
          BrowseAndBuy={BrowseAndBuy}
          GetAdvice={GetAdvice}
        />
      </li>
      <li className="flex gap-1 items-center py-3 md:py-5 group cursor-pointer">
        <span> Find Work </span>
        <FaAngleDown className="group-hover:rotate-180 duration-300" />
        {/* Nested Menu bar */}
        <SecondNestedMenu />
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
  );
};

export default DextopLeftSection;
