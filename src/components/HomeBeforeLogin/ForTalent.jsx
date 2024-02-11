import Image from "next/image";
import Button from "../Button";

const ForTalent = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container mx-auto px-3 ">
        <div className="flex rounded-lg overflow-hidden flex-col lg:flex-row">
          {/* Image Container */}
          <div className="flex-1">
            <Image
              width={500}
              height={500}
              className="w-full min-h-full"
              src={"/For-talent-dex.webp"}
              alt="A woman is smiling and working on her laptop"
            />
          </div>
          <div className="flex-1 bg-blue text-white p-6 lg:p-12 flex flex-col justify-between">
            {/* Top div */}
            <div>
              <h5 className="text-xl mb-6"> For talent </h5>
              <h1 className="text-4xl lg:text-6xl font-semibold mb-6">
                Find great <br /> work
              </h1>
              <p className="mb-6">
                Meet clients you’re excited to work with and take your career or
                business to new heights.
              </p>
            </div>
            {/* Bottom DIv */}
            <div>
              <hr />
              <ul className="w-full flex justify-between flex-wrap lg:flex-nowrap my-6 gap-6">
                <li className="max-w-[180px]">
                  Find opportunities for every stage of your freelance career
                </li>
                <li className="max-w-[180px]">
                  Control when, where, and how you work
                </li>
                <li className="max-w-[180px]">
                  Explore different ways to earn
                </li>
              </ul>
              <Button
                text={"Find Opportunities"}
                aditionalClass={"bg-white text-black hover:bg-gray-200 "}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTalent;
