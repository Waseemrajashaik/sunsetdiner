"use client";
import { useState } from "react";

const Reservation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    const input = e.target.value;
    console.log(input);
    const formattedInput = formatPhoneNumber(input);
    setPhoneNumber(formattedInput);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    // Remove non-numeric characters
    const numericOnly = phoneNumber.replace(/\D/g, "");

    // Apply desired format
    let formattedNumber = numericOnly.replace(
      /(\d{1})(\d{3})(\d{3})(\d{4})/,
      "+$1 $2 $3 $4",
    );

    return formattedNumber;
  };

  return (
    <div className="container-fluid reservation-bg flex h-screen w-screen items-center justify-center">
      <form className="w-full max-w-lg rounded-lg bg-white p-10">
        <div className="flex gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black">First Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs border-[black] bg-white text-black"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs border-[black] bg-white text-black"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-black">Email Id</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full border-[black] bg-white text-black"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-black">Phone Number</span>
          </div>
          <input
            type="tel"
            placeholder="### ### ####"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="input input-bordered w-full border-[black] bg-white text-black"
          />
        </label>
      </form>
    </div>
  );
};

export default Reservation;
