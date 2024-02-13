"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

const Page = () => {
  const [accountType, setAccountType] = useState("");
  return (
    <main className="container mx-auto px-3">
      {/* First Stage */}
      <div className="my-8 flex flex-col space-y-10 items-center">
        <h1 className="text-center text-4xl font-medium">
          Join as a client or freelancer
        </h1>
        {/* Options container*/}
        <div className="flex flex-col md:flex-row gap-6">
          <label
            htmlFor="client"
            className="border-2 rounded-lg border-gray-300 p-6 has-[:checked]:border-grn has-[:checked]:bg-grn/10 w-[300px] block relative group cursor-pointer active:scale-95 duration-150"
            onClick={() => setAccountType("client")}
          >
            <FaUserTie className="text-3xl mb-4" />
            <h4 className="text-3xl">I’m a client, hiring for a project</h4>
            <input
              type="radio"
              id="client"
              name="account"
              className="opacity-0"
            />
            <div className="absolute top-6 right-6">
              <span className="w-6 h-6 rounded-full bg-gray-200 inline-block relative after:h-2 after:bg-white after:w-2 after:absolute after:content-[''] after:top-2 after:rounded-full after:left-2 group-has-[:checked]:bg-grn"></span>
            </div>
          </label>
          <label
            htmlFor="freelancer"
            className="border-2 rounded-lg border-gray-300 p-6 has-[:checked]:border-grn has-[:checked]:bg-grn/10 w-[300px] block relative group cursor-pointer active:scale-95 duration-150"
            onClick={() => setAccountType("freelancer")}
          >
            <FaUserPen className="text-3xl mb-4" />
            <h4 className="text-3xl">I’m a freelancer, looking for work</h4>
            <input
              type="radio"
              id="freelancer"
              name="account"
              className="opacity-0"
            />
            <div className="absolute top-6 right-6">
              <span className="w-6 h-6 rounded-full bg-gray-200 inline-block relative after:h-2 after:bg-white after:w-2 after:absolute after:content-[''] after:top-2 after:rounded-full after:left-2 group-has-[:checked]:bg-grn"></span>
            </div>
          </label>
        </div>
        <button
          className={`px-10  py-2 text-white ${
            accountType !== "" ? "bg-grn" : "bg-gray-300"
          } rounded-full`}
          disabled={accountType === ""}
        >
          {accountType === ""
            ? "Create Account"
            : accountType === "client"
            ? "Join as a client"
            : "Apply as a freelancer"}
        </button>
        <p>
          Already have an account?
          <Link href={"/login"} className="text-grn hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
