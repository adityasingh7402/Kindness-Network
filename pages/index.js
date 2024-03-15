import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('./admin')
        }
      }, [])
  return (
    <>
      <div className="main_page">
        <Link href={'/NGO'}>NGO</Link>
        <Link href={'/Donation'}>Donation</Link>
        <Link href={'/Volunteer'}>Volunteer</Link>
      </div>
    </>
  );
}
