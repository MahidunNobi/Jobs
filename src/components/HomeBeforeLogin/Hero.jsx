import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-3">
        <ul className="hidden lg:flex gap-6  *:text-base *:cursor-pointer py-4">
          <li className="hover:text-grn hover:underline">Development and IT</li>
          <li className="hover:text-grn hover:underline">AI Services</li>
          <li className="hover:text-grn hover:underline">
            Design and Creative
          </li>
          <li className="hover:text-grn hover:underline">Sals & Marketing</li>
          <li className="hover:text-grn hover:underline">
            Admin and Customer Support
          </li>
          <li className="hover:text-grn hover:underline">More</li>
        </ul>
        <div className="heroContainer lg:flex lg:justify-between lg:items-center mt-10">
          {/* Hero left */}
          <div className="lg:w-[45%]">
            <h1 className="text-6xl md:text-8xl tracking-tight text-grn">
              How work <br /> should work
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl my-6">
              Forget the old rules. You can have the best people.Right now.
              Right here.
            </p>
            <Button text={"Get Started"} aditionalClass="my-6" />
            <div className="flex gap-6">
              <Image
                width={80}
                height={40}
                src={"/microsoft.svg"}
                alt="Microsoft Logo"
              />
              <Image
                width={80}
                height={40}
                src={"/airbnb.svg"}
                alt="Airbnb Logo"
              />
              <Image
                width={80}
                height={40}
                src={"/bissell.svg"}
                alt="Bissell Logo"
              />
            </div>
          </div>
          {/* Hero Right */}
          <div className="hidden lg:block w-[45%]">
            <Image
              width={500}
              height={500}
              alt="Hero Right Image"
              src={"/Hero-Right-Image.webp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
