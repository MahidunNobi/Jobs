import Image from "next/image";
import { FaHeadphones, FaSuitcase } from "react-icons/fa";
import { MdOutlineHandyman } from "react-icons/md";
import Button from "../Button";

const EnterpriceSuit = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container mx-auto px-3 ">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-xl overflow-hidden bg-grn2">
          {/* Text Cotainer */}
          <div className="p-6 text-white space-y-3 md:space-y-6 lg:w-[50%]">
            <h6 className="text-xl font-medium">Enterprise Suite</h6>
            <h1 className="text-4xl lg:text-5xl font-semibold lg:leading-[60px]">
              This is how &nbsp; <br />
              <span className="text-onGrn2 ">
                good companies <br /> find good company.
              </span>
            </h1>
            <p>
              Access the top 1% of talent on Upwork, and a full suite of hybrid
              workforce management tools. This is how innovation works now.
            </p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <MdOutlineHandyman className="text-onGrn2" />
                <p> Access expert talent to fill your skill gaps</p>
              </li>
              <li className="flex items-center gap-2">
                <FaSuitcase className="text-onGrn2" />
                <p>
                  {" "}
                  Control your workflow: hire, classify and pay your talent
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaHeadphones className="text-onGrn2" />
                <p> Partner with Upwork for end-to-end support</p>
              </li>
            </ul>
            <Button text={"Learn More"} aditionalClass={"bg-white text-grn2"} />
          </div>
          {/* Image Container*/}
          <div className="lg:w-[40%] overflow-hidden">
            <Image
              width={500}
              height={0}
              src="/GoodCompanies.webp"
              alt="A man is sitting on a wheel chair with style"
              className=" w-full lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriceSuit;
