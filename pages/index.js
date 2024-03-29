import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <div className="main_page">
        <div className="navbar flex justify-center items-center px-20 h-24 shadow-md">
          <div className="logo w-1/2">
            <div className="logoImg">
              <img src="/logo.png" alt="" />
            </div>
          </div>
          <div className="menus flex w-1/2 justify-start items-center ml-20">
            <div className="list-menu mr-14 font-medium"><Link className=" hover:text-green-600" href={'/home'}>Home</Link></div>
            <div className="list-menu mr-14 font-medium"><Link className=" hover:text-green-600" href={'/about'}>About</Link></div>
            <div className="list-menu ngos cursor-pointer relative mr-14 font-medium"><div className=" hover:text-green-600">NGOs</div>
              <div className="sub-menu absolute top-0 -left-20 w-52">
                <div className="sub-list-list bg-white flex justify-between shadow-md mt-16 items-start flex-col">
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={'/NGOs'}>Add NOG&apos;s</Link>
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={''}>View NOG&apos;s</Link>
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={''}>View Volunteer&apos;s</Link>
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={''}>View Donations</Link>
                </div>
              </div>
            </div>
            <div className="list-menu donation cursor-pointer relative mr-14 font-medium"><div className=" hover:text-green-600">Donation</div>
            <div className="sub-menu-2 absolute top-0 -left-10 w-52">
                <div className="sub-list-list bg-white flex justify-between shadow-md mt-16 items-start flex-col">
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={'/Donation'}>Donate</Link>
                  <Link className="px-6 py-3 hover:shadow-sm w-full hover:text-green-600" href={''}>Become Volunteer</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="first-section bg-green-500 h-screen">
        <div className="suheading text-white p-20 pt-24">
          <h2 className="text-9xl">KindnessNetwork</h2>
          <p className="text-lg">Building Bridges Between Donors and NGOs for Meaningful Impact</p>
        </div>
          <div className="second-sub-section">
            <div className="para"></div>
            <div className="side-image">
              <img src="" alt="" />
            </div>
          </div>
      </div>
      </div>
    </>
  );
}
