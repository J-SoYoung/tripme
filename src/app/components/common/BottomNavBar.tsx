import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Home from "@assets/icons/nav_home.svg";
import Mypage from "@assets/icons/nav_mypage.svg";
import Search from "@assets/icons/nav_search.svg";
import Wish from "@assets/icons/nav_wish.svg";

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 mx-auto w-[499px] max-w-[600px] border-t-2 bg-[#fff]">
      <ul className="flex justify-around p-4">
        <Link href="/home" className="text-center cursor-pointer">
          <Image
            width={30}
            height={30}
            src={Home}
            alt="Home"
            className="w-6 h-6 mx-auto"
          />
          <span className="text-xs">HOME</span>
        </Link>
        <Link href="/search" className="text-center cursor-pointer">
          <Image
            width={30}
            height={30}
            src={Search}
            alt="SEARCH"
            className="w-6 h-6 mx-auto"
          />
          <span className="text-xs">SEARCH</span>
        </Link>
        <Link href="/wish" className="text-center cursor-pointer">
          <Image
            width={30}
            height={30}
            src={Wish}
            alt="Wish"
            className="w-6 h-6 mx-auto"
          />
          <span className="text-xs">WISH</span>
        </Link>
        <Link href="/mypage" className="text-center cursor-pointer">
          <Image
            width={30}
            height={30}
            src={Mypage}
            alt="Mypage"
            className="w-6 h-6 mx-auto"
          />
          <span className="text-xs">MYPAGE</span>
        </Link>
      </ul>
    </nav>
  );
}
