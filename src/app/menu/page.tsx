"use client";
import { useState } from "react";
import Image from "next/image";

import MenuItems from "../../../public/menu_items.json";
import SMImage1 from "../../../public/special_menu/sm_image1.jpeg";
import SMImage2 from "../../../public/special_menu/sm_image2.jpeg";
import SMImage3 from "../../../public/special_menu/sm_image3.jpeg";

type MenuItems = any;
type MenuItemKeys = keyof typeof MenuItems;

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(0);
  const handleToggle = (i: any) => {
    setMenuToggle(i);
  };
  return (
    <div className="container-fluid menu-bg w-screen">
      <div className="relative flex w-screen flex-row flex-wrap justify-around bg-[darkseagreen] bg-cover bg-fixed bg-center bg-no-repeat pt-20">
        <h1 className="bungee-style z-10 w-full pt-10 text-center !text-[#ffffff] drop-shadow-[0px_3px_2px_rgba(0,0,0,1)] min-[100px]:text-3xl lg:text-5xl">
          Today Special Menu
        </h1>
        <div className="flex w-full flex-row flex-wrap justify-around pb-20 pt-20">
          <div className="card relative h-[450px] w-64 cursor-pointer min-[100px]:pb-10 min-[100px]:pt-10">
            <figure className="z-10 flex h-[200px] w-full items-center rounded-[100%] border">
              <Image
                src={SMImage1}
                alt="Shoes"
                className="h-inherit w-inherit object-cover"
                h-inherit
              />
            </figure>
            <div className="card-body glass absolute bottom-0 h-[240px] w-full items-center rounded-b-lg pt-[3rem] text-center text-white">
              <h2 className="card-title">TITLE NAME HERE</h2>
              <p>DESCRIPTION HERE</p>
              <p className="bungee-style drop-shadow-[0px_2px_0px_rgba(0,0,0,1)]">
                $ 12
              </p>
              <div className="card-actions">
                <button className="btn border-0 bg-[#FFDD00] text-black drop-shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:bg-white">
                  Order now
                </button>
              </div>
            </div>
          </div>
          <div className="card relative h-[450px] w-64 cursor-pointer min-[100px]:pb-10 min-[100px]:pt-10">
            <figure className="z-10 flex h-[200px] w-full items-center rounded-[100%] border">
              <Image
                src={SMImage2}
                alt="Shoes"
                className="h-inherit  w-inherit object-cover"
              />
            </figure>
            <div className="card-body glass absolute bottom-0 h-[240px] w-full items-center rounded-b-lg pt-[3rem] text-center text-white">
              <h2 className="card-title">TITLE NAME HERE</h2>
              <p>DESCRIPTION HERE</p>
              <p className="bungee-style drop-shadow-[0px_2px_0px_rgba(0,0,0,1)]">
                $ 12
              </p>
              <div className="card-actions">
                <button className="btn border-0 bg-[#FFDD00] text-black drop-shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:bg-white">
                  Order now
                </button>
              </div>
            </div>
          </div>
          <div className="card relative h-[450px] w-64 cursor-pointer min-[100px]:pb-10 min-[100px]:pt-10">
            <figure className="z-10 flex h-[200px] w-full items-center rounded-[100%] border">
              <Image
                src={SMImage3}
                alt="Shoes"
                className="h-inherit w-inherit  object-cover"
              />
            </figure>
            <div className="card-body glass absolute bottom-0 h-[240px] w-full items-center rounded-b-lg pt-[3rem] text-center text-white">
              <h2 className="card-title">TITLE NAME HERE</h2>
              <p>DESCRIPTION HERE</p>
              <p className="bungee-style drop-shadow-[0px_2px_0px_rgba(0,0,0,1)]">
                $ 12
              </p>
              <div className="card-actions">
                <button className="btn border-0 bg-[#FFDD00] text-black drop-shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:bg-white">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full pt-[100px] text-center text-black">
        Magic happens here
      </p>
      <h1 className="chunk-style w-full pt-2 text-center text-6xl">The Menu</h1>

      <div className="w-full p-10 min-[100px]:hidden lg:flex lg:flex-col">
        {Object.keys(MenuItems).map((items, i) => {
          return (
            <div
              className="collapse !rounded-none bg-[darkseagreen] text-black"
              key={i}
            >
              <input
                type="radio"
                name="my-accordion-1"
                checked={menuToggle === i ? true : false}
                onChange={() => handleToggle(i)}
              />
              <div className="collapse-title w-full text-xl font-bold text-white">
                {items}
              </div>
              <div className="collapse-content:checked flex flex-wrap bg-white pl-10 pr-10">
                {MenuItems[items as MenuItemKeys].map((item, i) => (
                  <div
                    className="flex w-full flex-col p-4 min-[100px]:flex-auto lg:flex-[50%]"
                    key={i}
                  >
                    <div className="flex w-full justify-between">
                      <span className="font-bold">{item["name"]}</span>
                      <span className="font-semibold">{`$ ${item["price"]}`}</span>
                    </div>
                    <span className="italic">{item["description"]}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full pt-5 min-[100px]:block lg:hidden">
        <div role="tablist" className="tabs tabs-lifted overflow-x-scroll">
          {Object.keys(MenuItems).map((items, i) => (
            <a
              role="tab"
              className={`tab ${menuToggle === i ? "tab-active" : ""}`}
              key={i}
              onClick={() => handleToggle(i)}
            >
              {items}
            </a>
          ))}
        </div>
        <div className="flex w-full p-10">
          {Object.keys(MenuItems).map((items, i) => (
            <div
              className={`border-[darkseagreen] ${menuToggle === i ? "tab-content:checked" : "tab-content"}`}
              key={i}
            >
              {MenuItems[items as MenuItemKeys].map((item, i) => (
                <div className="flex w-full flex-col p-4 text-black" key={i}>
                  <div className="flex w-full justify-between">
                    <span className="font-bold">{item["name"]}</span>
                    <span className="font-semibold">{`$ ${item["price"]}`}</span>
                  </div>
                  <span className="italic">{item["description"]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
