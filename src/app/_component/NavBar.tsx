"use client";
import type from "next";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SunsetLogo from "../../../public/SunsetLogo.png";
import OrderNow from "../../../public/order_now.png";

type Data = {
  children: any;
};
const MenuBarList = [
  { id: 1, name: "HOME", path: "/" },
  { id: 2, name: "ABOUT US", path: "/about-us/", extraClass: "menubtn-l" },
  { id: 3, name: "MENU", path: "/menu/", extraClass: "menubtn-r" },
  { id: 4, name: "CATERING", path: "/catering/", extraClass: "menubtn-b" },
  {
    id: 5,
    name: "RESERVATION",
    path: "/reservation/",
    extraClass: "menubtn-o",
  },
];

const NavBar = ({ children }: Data) => {
  const pathname = usePathname();
  console.log(pathname);
  const myRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <main className="w-screen min-w-full max-w-full" ref={myRef}>
      <div
        className={`fixed z-50 w-full ${bgColor ? "min-[1009px]:bg-white/30" : ""}`}
      >
        <nav className="m-2 flex items-center justify-between p-2">
          <Link className="w-44 text-3xl font-bold leading-none" href="/">
            <Image
              className="logo"
              src={SunsetLogo}
              alt="Sunset Diner"
              priority={true}
            />
          </Link>
          <ul className="menu-items flex items-center">
            {MenuBarList.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`menubtn text-black ${item.extraClass ?? ""} ${pathname === item.path ? "menubtn-active" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <svg
            id="hamburger"
            className={`z-50 w-[50px] min-[100px]:!flex min-[1009px]:!hidden ${clicked ? "header-toggle-on" : ""}`}
            viewBox="0 0 60 40"
            onClick={handleClick}
          >
            <g
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path id="top-line" d="M10,10 L50,10 Z"></path>
              <path id="middle-line" d="M10,20 L50,20 Z"></path>
              <path id="bottom-line" d="M10,30 L50,30 Z"></path>
            </g>
          </svg>
          <ul className={`wrapper ${clicked ? "active" : ""}`}>
            {MenuBarList.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`menubtn text-black ${item.extraClass ?? ""} ${pathname === item.path ? `menubtn-mb-active-${item.name === "ABOUT US" ? "about" : item.name.toLowerCase()}` : ""}`}
                  onClick={handleClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {children}
      <footer className="home-bg footer footer-center relative p-10 text-primary-content">
        <aside>
          <div className="w-52">
            <Image
              className="logo"
              src={SunsetLogo}
              alt="Sunset Diner"
              priority={true}
            />
          </div>
          <p className="font-bold">
            Sunset Diner
            <br />
            Providing delicious food since 1992
          </p>
          <p>Copyright © 2024 - All right reserved</p>
          <p>Designed by MyCodeX team.</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div className="fixed z-30 drop-shadow-[0px_0px_18px_rgba(0,0,0,1)] min-[100px]:bottom-1 min-[100px]:right-1 min-[100px]:w-24 lg:bottom-10 lg:right-10 lg:w-32">
        <a href="https://order.tbdine.com/pickup/34012" target="_blank">
          <Image src={OrderNow} alt="Order Now" />
        </a>
      </div>
    </main>
  );
};

export default NavBar;
