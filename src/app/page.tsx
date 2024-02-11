"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import type from "next";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

import Image1 from "../../public/image/image1.jpg";
import Image2 from "../../public/image/image2.jpg";
import Image3 from "../../public/image/image3.jpg";
import Image4 from "../../public/image/image4.jpeg";
import Image5 from "../../public/image/image5.jpeg";
import Image6 from "../../public/image/image6.jpeg";
import Image7 from "../../public/image/image7.jpg";
import Image8 from "../../public/image/image8.jpg";
import Image9 from "../../public/image/image9.jpeg";
import Image10 from "../../public/image/image10.jpg";
import Image11 from "../../public/image/image11.jpeg";
import Image12 from "../../public/image/image12.jpeg";
import SMImage1 from "../../public/special_menu/sm_image1.jpeg";
import SMImage2 from "../../public/special_menu/sm_image2.jpeg";
import SMImage3 from "../../public/special_menu/sm_image3.jpeg";
import HomeBg from "../../public/home-bg.png";
import HomeBg2 from "../../public/home-bg2.png";
import DinerKitchen from "../../public/diner-kitchen.jpeg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

const Home = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [titlePop, setTitlePop] = useState(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    const scrollFunction = () => {
      if (
        gallery &&
        gallery.current &&
        gallery.current.offsetTop <= window.scrollY &&
        window.scrollY <=
          gallery.current.offsetTop + gallery.current.offsetHeight - 200
      ) {
        setTitlePop(true);
      } else {
        setTitlePop(false);
      }
    };
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", scrollFunction);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  return (
    <>
      <div className="container-fluid about-bg w-screen">
        <div className="container-fluid home-bg bg-image grid h-screen w-screen grid-cols-8 grid-rows-8">
          <div className="fixed h-full w-full">
            <Image
              className="h-inherit !absolute object-cover"
              src={HomeBg}
              alt="Diner"
              fill={true}
              priority={true}
            />
          </div>
          <div className="bg-image relative min-[100px]:col-start-2 min-[100px]:col-end-8 min-[100px]:row-start-2 min-[100px]:row-end-5 lg:col-start-2 lg:col-end-6 lg:row-start-2 lg:row-end-8">
            <div className="h-full w-full">
              <Image
                className="animate__animated animate__backInLeft rounded-[40px] object-cover"
                src={Image3}
                alt="Diner"
                fill={true}
                priority={true}
              />
            </div>
          </div>
          <div className="z-10 flex h-full flex-col items-center min-[100px]:col-start-2 min-[100px]:col-end-8 min-[100px]:row-start-5 min-[100px]:row-end-8 lg:col-start-5 lg:col-end-8 lg:row-start-4 lg:row-end-6 lg:justify-center">
            <h1 className=" animate__animated animate__backInRight chunk-style text-black  drop-shadow-[0px_6px_4px_rgba(0,6,13,1)] min-[100px]:pt-2.5 min-[100px]:text-4xl lg:text-7xl">
              BEST FOOD
            </h1>
            <p className="animate__animated animate__backInRight font-semibold text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] min-[100px]:text-center min-[100px]:text-xl lg:pt-10 lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dolorum molestias. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Minima vero dicta quaerat ea excepturi incidunt,
              molestias molestiae ratione nam iusto,
            </p>
          </div>
        </div>
        <div className="relative w-screen gap-10 bg-gray-400 pt-10 md:flex md:flex-col md:flex-wrap lg:grid lg:h-[50vh] lg:grid-cols-8 lg:grid-rows-5">
          <Image
            className="absolute object-cover blur-[5px]"
            src={DinerKitchen}
            alt="diner kitchen"
            fill={true}
          />
          <h1 className="bungee-style chunk-style-h m-0 text-center text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] min-[100px]:text-3xl md:w-full lg:col-start-2 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:text-5xl">
            The Diner Policy
          </h1>
          <div className="card md:row-start-2 md:row-end-3 md:flex-auto lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:m-0">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold text-yellow-500 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.7)]">
                Card title!
              </h2>
              <p className="text-center text-xl  font-semibold text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat explicabo omnis
              </p>
            </div>
          </div>
          <div className="card md:flex-auto lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-5 lg:m-0">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold text-blue-400 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.7)]">
                Card title!
              </h2>
              <p className="text-center text-xl  font-semibold text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat explicabo omnis
              </p>
            </div>
          </div>
          <div className="card  md:mb-10 md:flex-auto lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-5 lg:m-0 ">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold text-green-500 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.7)]">
                Card title!
              </h2>
              <p className="text-center text-xl  font-semibold text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat explicabo omnis
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex w-screen flex-row flex-wrap justify-around bg-white bg-cover bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${HomeBg2.src})`}}>
          <div className="absolute h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
          <h1 className="bungee-style z-10 w-full pt-10 text-center !text-[#89c9f7] drop-shadow-[0px_3px_2px_rgba(0,0,0,1)] min-[100px]:text-3xl lg:text-5xl">
            Today Special Menu
          </h1>
          <div className="flex w-full flex-row flex-wrap justify-around pb-20 pt-20">
            <div className="card relative h-[450px] w-64 cursor-pointer min-[100px]:pb-10 min-[100px]:pt-10">
              <figure className="z-50 flex h-[200px] w-full items-center rounded-[100%] border">
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
              <figure className="z-50 flex h-[200px] w-full items-center rounded-[100%] border">
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
              <figure className="z-50 flex h-[200px] w-full items-center rounded-[100%] border">
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
        <div
          ref={gallery}
          className="gallery relative h-screen min-[100px]:hidden lg:flex"
        >
          <h1
            className={`chunk-style top-28 z-10 w-full text-center text-5xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] ${titlePop ? "fixed" : "absolute"}`}
          >
            Popular Hot Menu
          </h1>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
        <div className="relative h-screen w-screen grid-cols-8 grid-rows-8 bg-neutral min-[100px]:grid lg:hidden">
          <h1 className="chunk-style z-10 col-start-1 col-end-9 row-start-2 row-end-3 w-full text-center text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
            Popular Hot Menu
          </h1>

          <div className="relative col-start-1 col-end-9 row-start-3 row-end-8">
            <div className="carousel carousel-center h-full max-w-full space-x-4 rounded-box p-4">
              {images.map((src, i) => (
                <div className="carousel-item relative h-full w-[80%]" key={i}>
                  <Image
                    src={src}
                    className="h-inherit w-full rounded-box object-cover"
                    alt="Image"
                  />
                  <h1 className="z-1 absolute bottom-4 w-full text-center text-xl font-bold text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
                    Item Name Here - Price
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type Column = {
  images: any;
  y: any;
};
const Column = ({ images, y }: Column) => {
  return (
    <motion.div className="column relative" style={{ y }}>
      {images.map((src: any, i: any) => {
        return (
          <div key={i} className="imageContainer">
            <Image
              src={src}
              alt="image"
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <h1 className="absolute bottom-4 z-50 w-full text-center text-xl font-bold text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
              Item Name Here - Price
            </h1>
          </div>
        );
      })}
    </motion.div>
  );
};
export default Home;
