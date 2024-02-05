import { FaArrowRight } from "react-icons/fa";
const ForClient = () => {
  return (
    <section className="py-6 lg:py-16 ">
      <div className="container mx-auto px-3 ">
        <div className="p-6 rounded-xl overflow-hidden text-white bg-[url(/For-Client-Mob.jpg)] lg:bg-[url(/For-Client-Dex.jpg)] bg-no-repeat bg-top bg-cover">
          <h6 className="text-xl font-medium mb-12">For clients</h6>
          <h1 className="text-6xl lg:text-8xl font-semibold lg:leading-[80px] max-w-[500px]">
            Find talent your way
          </h1>
          <p className="max-w-[350px] my-6">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 *:cursor-pointer">
            <div className="p-4 rounded-xl bg-grn text-white hover:bg-white hover:text-grn">
              <h6 className="text-3xl tracking-tighter font-medium leading-[30px] mb-4">
                Post a job <br /> and hire a pro
              </h6>
              <p className="flex items-center gap-6 justify-end">
                <span>
                  Talent Marketplace <sup> TM </sup>
                </span>
                <FaArrowRight className="text-lg" />
              </p>
            </div>
            <div className="p-4 rounded-xl bg-grn text-white hover:bg-white hover:text-grn">
              <h6 className="text-3xl tracking-tighter font-medium leading-[30px] mb-4">
                Browse and <br /> buy projects
              </h6>
              <p className="flex items-center gap-6 justify-end">
                <span>
                  Project Catelog <sup> TM </sup>
                </span>
                <FaArrowRight className="text-lg" />
              </p>
            </div>

            <div className="p-4 rounded-xl bg-grn text-white hover:bg-white hover:text-grn">
              <h6 className="text-3xl tracking-tighter font-medium leading-[30px] mb-4">
                Get advice from an
                <br /> industry expert
              </h6>
              <p className="flex items-center gap-6 justify-end">
                <span>Consultation</span>
                <FaArrowRight className="text-lg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClient;
