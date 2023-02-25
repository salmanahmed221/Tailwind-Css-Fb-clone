import Image from "next/image";
import Link from "next/link";

export default function Fbclone() {
  return (
    <>
      <div className="flex justify-center mt-36 gap-8 ">
        {/* Left Part */}

        <div className="w-72 basis-[30%] mt-12 mr-10 ">
          <Image src="/fb.svg" alt="fb-logo" width={200} height={200} />
          <p className="ml-5 font-medium">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Part */}
        <div className="border-2 border-gray-200 px-5 py-10 shadow-black shadow-md ">
          <div className="w-96 ">
            <input
              type="email"
              placeholder="Email address or Phone number"
              className="py-1 pl-1 w-96 mt-2 border-2 border-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-1 pl-1 w-96 mt-2 border-2 border-gray-100"
            />
            <button className="bg-[#166fe5] text-white mt-3 py-1 w-[380px] rounded-sm font-semibold hover:bg-blue-500 ml-[2px]">
              Log Inn
            </button>
            <p className="ml-28 mt-3 text-blue-400 hover:underline">
              Forgotten Password?
            </p>
            <hr className="mt-5" />
            <button className="bg-[#41b729] w-52 px-5 ml-20 mt-5 py-2 rounded-sm hover:bg-green-600 text-white font-semibold">
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
