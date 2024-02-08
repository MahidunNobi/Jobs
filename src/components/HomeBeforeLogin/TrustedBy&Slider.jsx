import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container mx-auto px-3 ">
        <h1 className="text-4xl lg:text-6xl font-semibold max-w-[500px]">
          Trusted by leading brands and startups
        </h1>
        {/* Slider */}
        <div className="flex gap-6 overflow-x-scroll overflow-y-hidden snap-x noScrollBar">
          <div className="p-6 rounded-lg bg-eden text-white min-w-[320px] lg:min-w-[600px] flex flex-col gap-6 lg:gap-10  my-6">
            {/* Top section */}
            <div className="">
              <div className="flex justify-center md:justify-start max-w-[300px]">
                <Image
                  src={"/nasdaq-light.svg"}
                  width={500}
                  height={500}
                  alt="Nasdaq"
                />
              </div>
              <h3 className="text-2xl mt-6 mb-2 ">
                “Upwork enables us to differentiate ourselves from our
                competitors and produce content at a higher caliber.”
              </h3>
              <p className="text-gray-200 ">
                Josh Machiz, Chief Digital Officer
              </p>
            </div>
            {/* Bottom section */}
            <div>
              <p className="text-gray-200">Result</p>
              <hr className="my-3" />
              <ul className="md:flex md:gap-6 space-y-3 md:space-y-0">
                <li className="max-w-[200px]">
                  <h3 className="text-2xl"> Emmy Winning </h3>
                  <p className="text-gray-200 max-w-[120px]">
                    Facebook Watch program
                  </p>
                </li>
                <li className="max-w-[280px]">
                  <h3 className="text-2xl"> Millions </h3>
                  <p className="text-gray-200">
                    of impressions generated per client per IPO
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-orange text-white min-w-[320px] lg:min-w-[600px] flex flex-col gap-6 lg:gap-10  my-6">
            {/* Top section */}
            <div className="">
              <div className="flex justify-center md:justify-start max-w-[300px]">
                <Image
                  src={"/microsoft-lg-light.svg"}
                  width={500}
                  height={500}
                  alt="Nasdaq"
                />
              </div>
              <h3 className="text-2xl mt-6 mb-2 ">
                “One of the advantages of utilizing freelancers is finding
                talent with different skills quickly as our needs change.”
              </h3>
              <p className="text-gray-200 ">
                Carol Taylor, Director of Content Experience
              </p>
            </div>
            {/* Bottom section */}
            <div>
              <p className="text-gray-200">Result</p>
              <hr className="my-3" />
              <ul className="md:flex md:gap-6 space-y-3 md:space-y-0">
                <li className="max-w-[200px]">
                  <h3 className="text-2xl"> 50% Faster </h3>
                  <p className="text-gray-200 ">launch of projects</p>
                </li>
                <li className="max-w-[280px]">
                  <h3 className="text-2xl"> 10,000 </h3>
                  <p className="text-gray-200">projects completed</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg bg-dark-grn text-white min-w-[320px] lg:min-w-[600px] flex justify-center items-center md:justify-start  my-6 overflow-hidden">
            {/* Image container */}
            <div className="hidden lg:block max-w-[40%] h-full">
              <Image
                width={500}
                height={500}
                src={"/TrustedBy-last-item-image.jpg"}
                alt="A lady is holding her glass on right hand and thinking"
                className="min-w-full min-h-full"
              />
            </div>
            {/* Description */}
            <div className="p-10 w-full">
              <h5 className="text-xl text-center lg:text-left">
                And many more
              </h5>
              <div className="mt-10 space-y-6 flex flex-col items-center lg:items-start w-full">
                <Image
                  width={100}
                  height={100}
                  src={"/nasdaq-light.svg"}
                  alt="Nasdaq"
                />
                <Image
                  width={200}
                  height={100}
                  src={"/automattic-light.svg"}
                  alt="Nasdaq"
                />
                <Image
                  width={100}
                  height={100}
                  src={"/bissell-light.svg"}
                  alt="Nasdaq"
                />
                <Image
                  width={100}
                  height={100}
                  src={"/coty-light.svg"}
                  alt="Nasdaq"
                />
                <Image
                  width={100}
                  height={100}
                  src={"/rancher-v2-light.svg"}
                  alt="Nasdaq"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
