"use client";
import Image from "next/image";
import ReviewImage from "../../../public/reviews.jpg";
import reviews from "../../../public/reviews.json";

const Rating = [1, 2, 3, 4, 5];

const TestimonialSection = () => (
  <div
    className="relative z-10 flex w-screen items-center justify-center bg-[#E1F3F7] bg-cover bg-fixed bg-right bg-no-repeat p-10"
    style={{ backgroundImage: `url(${ReviewImage.src})` }}
  >
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-4xl font-semibold tracking-tight !text-[#77fa84] drop-shadow-[0px_3px_5px_rgba(0,0,0,0.5)] sm:text-5xl">
        Read trusted reviews from our customers
      </h2>

      <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
        {reviews.map((review) => (
          <div className="mb-8 sm:break-inside-avoid" key={review.id}>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-lg sm:p-8">
              <p className="text-center text-gray-700">{review.comment}</p>

              <div className="mt-4 flex items-center">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="flex justify-center gap-0.5 text-[#FFDD00]">
                    {Rating.map((i) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill={i <= review.stars ? "currentColor" : "black"}
                        key={i}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    {`" ${review.customer_name} "`}
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialSection;
