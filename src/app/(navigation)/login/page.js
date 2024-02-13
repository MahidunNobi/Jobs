import Button from "@/components/Button";
import ButtonBordered from "@/components/ButtonBordered";
import Link from "next/link";
import { FaApple, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  return (
    <main>
      <div className="container mx-auto px-3 min-h-screen flex flex-col justify-center items-center">
        <div className="border border-gray-300 rounded-xl px-6 md:px-16 py-4 md:py-6 space-y-6 mt-6">
          <h2 className="md:min-w-[350px] text-2xl text-center font-semibold">
            Log in to Jobs
          </h2>
          <div className="w-full relative">
            <FaRegUser className="absolute top-[9px] left-4" />
            <input
              type="text"
              placeholder="Username or E-mail"
              className=" rounded-lg border-2 border-gray-200 pl-10 pr-3 py-1 focus:border-gray-400 hover:border-gray-300 outline-none w-full"
            />
          </div>
          <Button
            text={"Continue with E-mail"}
            aditionalClass={"w-full font-medium"}
          />
          <div className="relative">
            <p className="bg-white inline px-2 absolute -top-[18px] left-[50%] -translate-x-1/2">
              or
            </p>
            <hr className="" />
          </div>
          <div className="relative">
            <FcGoogle className="p-2 rounded-full bg-white text-4xl absolute top-[2px] left-[2px]" />
            <button className="bg-[#4285f4] text-white py-2 rounded-full w-full">
              Continue with Google
            </button>
          </div>
          <button className="py-2 rounded-full w-full border border-gray-600 flex items-center justify-center gap-1">
            <FaApple />
            <span>Continue with Apple</span>
          </button>
          <div className=" flex flex-col justify-center items-center gap-6">
            <div className="relative mt-16 w-full">
              <p className="bg-white inline px-2 absolute -top-[18px] left-[50%] -translate-x-1/2 w-[200px] text-center">
                Don&apos;t have an account?
              </p>
              <hr className="" />
            </div>
            <Link href={"/signup"}>
              <ButtonBordered
                text={"Sign Up"}
                aditionalClass={"min-w-[130px]"}
              />
            </Link>
          </div>
        </div>
        <footer className="container mx-auto bg-dark-grn text-white rounded-lg min-h-[200px] px-16 flex flex-col md:flex-row justify-center items-center mt-16 mb-6">
          <p className="inline text-xs text-center">
            © 2015 - 2024 Upwork® Global Inc.
          </p>
          <li className="inline hover:underline cursor-pointer text-xs">
            • Privacy Policy
          </li>
        </footer>
      </div>
    </main>
  );
};

export default page;
