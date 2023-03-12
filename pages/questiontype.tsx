import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function questiontype() {
  const questionTypes = [
    "Opening",
    "Motivation",
    "Situational",
    "Behavioral",
    "Skills-Based",
    "Closing",
    "About You",
    "Interviewer Q's",
  ];

  return (
    <>
      <Head>
        <title>TechQuest</title>
        <meta
          name="description"
          content="A website using AI Prompts to help those in the tech industry prepare for interviews"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="min-h-[80vh] flex flex-col justify-center items-center mx-auto">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold my-8">
          Choose Interview Question Type
        </h1>
        <div className="grid grid-cols-2 mt-3">
          {questionTypes.map((type) => (
            <button
              key={type}
              className="bg-white rounded-full px-4 py-2 m-4 text-gray-600 font-bold text-base focus:outline-none hover:bg-gray-200 transition-colors duration-300"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
