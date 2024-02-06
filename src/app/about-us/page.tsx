"use client";
import Image from "next/image";
import AboutUs from "/public/about_us.png";

import InImage0 from "/public/about_us/in_image0.jpeg";
import InImage1 from "/public/about_us/in_image1.jpeg";
import InImage2 from "/public/about_us/in_image2.jpeg";
import InImage3 from "/public/about_us/in_image3.jpeg";
import InImage4 from "/public/about_us/in_image4.jpeg";
import InImage5 from "/public/about_us/in_image5.jpeg";
import InImage6 from "/public/about_us/in_image6.jpeg";
import InImage7 from "/public/about_us/in_image7.jpeg";
import InImage8 from "/public/about_us/in_image8.jpeg";
// import InImage9 from "/public/about_us/in_image9.jpeg";
import InImage10 from "/public/about_us/in_image10.jpeg";

const ListImage = [
  InImage0,
  InImage1,
  InImage2,
  InImage3,
  InImage4,
  InImage5,
  InImage6,
  InImage7,
  InImage8,
  InImage10,
];

const About = () => {
  return (
    <div className="container-fluid about-bg w-screen">
      <div className="w-full min-[150px]:h-[150px] md:h-[250px]">
        <Image
          className="h-inherit mark-image relative"
          src={AboutUs}
          alt="image"
          fill={true}
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="flex w-full items-center justify-center pt-10 text-6xl font-bold text-white">
        <h1>About Us</h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-xl font-medium text-white">
        <p className="w-1/2 pb-10 pt-10">
          The Sunset Diner is an absolutely authentic diner at the far west end
          of St. Marys, on Queen Street West. Since the 1950s, this diner has
          served four generations at the same location. There are some things
          that people expect when they visit a diner and the Sunset Diner does
          them all well! The all-day breakfast is a winner, and our burgers are
          excellent. And, don’t forget the dinner staples – fries, foot-longs
          and milkshakes, all consistently delicious!
        </p>
        <section
          className="ark:text-gray-50 w-full py-6 
        dark:bg-gray-800"
        >
          <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
            {ListImage.map((src, i) => (
              <div
                key={i}
                className="aspect-square h-full min-h-96 w-full rounded shadow-sm first:col-span-2 first:row-span-2 last:col-span-2 last:row-span-2 first:md:col-start-3 first:md:row-start-1 last:md:col-start-1 last:md:row-start-3 dark:bg-gray-500"
              >
                <Image
                  src={src}
                  alt=""
                  className="h-inherit w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full py-6 dark:bg-white dark:text-black">
          <div className="container mx-auto space-y-16 p-4 sm:p-10">
            <div className="space-y-4">
              <h3 className="leadi text-2xl font-bold sm:text-5xl">
                Meet our team
              </h3>
              <p className="max-w-2xl dark:text-gray-400">
                At a assumenda quas cum earum ut itaque commodi saepe rem
                aspernatur quam natus quis nihil quod, hic explicabo doloribus
                magnam neque, exercitationem eius sunt!
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?15"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?11"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?2"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?3"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?4"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?5"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?6"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="mx-auto mb-4 h-56 rounded-sm bg-center object-cover dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?7"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
