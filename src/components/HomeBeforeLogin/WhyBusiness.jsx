import Image from "next/image";
import { FaHandHoldingDollar } from "react-icons/fa6";
const WhyBusiness = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container mx-auto px-3 flex flex-col lg:flex-row  gap-6 relative">
        {/* Left Container */}
        <div className=" flex-grow bg-grn/5 rounded-lg px-8 py-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Why businesses <br />
            turn to Us
          </h1>
          <ul className="space-y-6 mt-6 *:max-w-[400px]">
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-2xl lg:text-3xl font-semibold">
                  Proof of quality
                </h5>
                <p className="">
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-2xl lg:text-3xl font-semibold">
                  No cost until you hire
                </h5>
                <p className="">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-2xl lg:text-3xl font-semibold">
                  Safe and secure
                </h5>
                <p className="text-sm">
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Right container */}
        <div className="bg-grn rounded-lg p-6 lg:pr-6 lg:pb-6 lg:pl-16 flex-1 text-white lg:flex lg:flex-col lg:justify-end">
          <h3 className="text-3xl font-medium">
            We’re the world’s work marketplace
          </h3>
          <ul className="space-y-6 mt-6">
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-2xl lg:text-3xl font-semibold">4.9/5</h5>
                <p className="">Clients rate professionals on Us</p>
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-2xl lg:text-3xl font-semibold">
                  Award winner
                </h5>
                <p className="">G2’s 2021 Best Software Awards</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Image Container */}
        <div className=" hidden lg:block absolute bottom-0 lg:right-[200px] xl:right-[300px] w-[300px] ">
          <Image
            width={500}
            height={500}
            className=""
            src={"/WhyBusiness.webp"}
            alt="A woman is doing YOGA"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBusiness;
