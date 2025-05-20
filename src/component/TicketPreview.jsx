import React, { useMemo } from "react";

import GitHubIcon from "../assets/images/icon-github.svg";
const TicketPreview = ({ formData = {}, onCancel }) => {
  const {
    name = "",
    email = "",
    handle = "",

    avatarPreview = "",
  } = formData;

  const ticketNumber = useMemo(() => {
    return "#" + Math.floor(100000 + Math.random() * 900000);
  }, []);
  const eventLocation = useMemo(() => {
    const cities = [
      "Austin, TX",
      "San Francisco, CA",
      "New York, NY",
      "Seattle, WA",
      "Denver, CO",
      "Chicago, IL",
      "Miami, FL",
    ];

    const city = cities[Math.floor(Math.random() * cities.length)];

    const day = Math.floor(Math.random() * 28) + 1;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[Math.floor(Math.random() * monthNames.length)];
    const dateStr = `${month} ${day}, 2024`;

    return `${dateStr} / ${city}`;
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-black via-[#150029] to-[#290a45] text-white font-mono flex flex-col items-center">
      <div className="w-full flex justify-start mb-6">
        <button
          onClick={onCancel}
          className="text-white text-sm bg-transparent border border-gray-500 hover:bg-gray-700 px-4 py-2 rounded-md transition"
        >
          ← Cancel
        </button>
      </div>

      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Congrats, <span className="text-orange-400">{name}!</span>
          <br />
          Your ticket is ready.
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          We&apos;ve emailed your ticket to{" "}
          <span className="text-purple-400 font-semibold">{email}</span> and
          will send updates in the run up to the event.
        </p>
      </div>

      <div className="relative w-1/2 max-w-2xl">
        <div className="bg-gradient-to-r from-[#2a1a45] to-[#3a2d60] border border-purple-500 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-black rounded-r-full z-10"></div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-black rounded-l-full z-10"></div>

          <div className="flex items-center space-x-4 z-20">
            <img
              src={avatarPreview}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <img src={GitHubIcon} alt="GitHub" className="w-4 h-4" />@
                {handle}
              </p>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-0 md:ml-6 z-20">
            <h4 className="text-white font-bold text-lg">Coding Conf</h4>
            <p className="text-sm text-gray-300">{eventLocation}</p>
          </div>

          <div className="hidden md:flex flex-col justify-between items-center h-20 border-l border-dashed border-gray-400 pl-4 ml-4 z-20">
            <span className="text-gray-400 rotate-90 text-xs">
              {ticketNumber}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
