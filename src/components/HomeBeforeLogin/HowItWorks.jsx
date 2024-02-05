import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiPinOutline } from "react-icons/ti";
import Button from "../Button";
import ButtonBordered from "../ButtonBordered";
const HowItWorks = () => {
  return (
    <section className="py-3 lg:py-16">
      <div className="container mx-auto px-3 lg:flex lg:gap-3 lg:items-center lg:justify-between">
        {/* left container */}
        <div className="lg:w-[40%] overflow-hidden">
          <Image
            width={800}
            height={500}
            src={"/HowItWorks.jpg"}
            alt="A laptop, a glass and a coffe on a surface. A lady is holding her one hand on the laptop and with other hand she is holding her charging phone"
          />
        </div>
        {/* right container */}
        <div className="lg:w-[60%] lg:ml-3 mt-3 lg:mt-0">
          <h1 className="text-4xl font-semibold mb-6 lg:mb-3">
            Up your work game, it’s easy
          </h1>
          <ul className="space-y-6">
            <li className="flex gap-1">
              <div>
                <FaHandHoldingDollar className="text-2xl" />
              </div>
              <div>
                <h5 className="text-xl font-semibold"> No cost to join </h5>
                <p className="text-sm">
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <TiPinOutline className="text-2xl" />
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  {" "}
                  Post a job and hire top talent{" "}
                </h5>
                <p className="text-sm">
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!
                </p>
              </div>
            </li>
            <li className="flex gap-1">
              <div>
                <FaStarHalfAlt className="text-2xl" />
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  {" "}
                  Work with the best—without breaking the bank{" "}
                </h5>
                <p className="text-sm">
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>
              </div>
            </li>
            <li>
              <Button
                text={"Sign up for free"}
                aditionalClass={"hidden lg:inline-block lg:mr-2"}
              />
              <ButtonBordered
                text={"Learn how to hire"}
                aditionalClass={"w-full lg:w-auto"}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
