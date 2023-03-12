import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Link2 from "next/link";

export default function Index() {
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

      <main
        id="home"
        className="mt-8 md:mt-20 mx-auto md:p-10 flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 min-h-[80vh]"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8">
          <div className="text-left m-auto items-center">
            <h1 className="justify-items-center text-5xl my-3 md:text-6xl font-medium mb-10 md:mb-12 tracking-wider">
              Need <br /> interview <br /> practice?{" "}
            </h1>
            <h3 className="text-base md:text-lg">
              Fast & easy technical interview questions <br /> powered by
              Artificial Intelligence.
            </h3>
            <div className="flex justify-center md:justify-end mt-10">
              <Link2 href="/generator">
                <button className="bg-white hover:bg-white-500 text-black font-semibold px-6 border border-white-500 hover:bg-slate-300 rounded-3xl mr-2 md:mr-4 mt-2 md:mt-6 inline-block w-36 md:w-40 h-10">
                  Demo
                </button>
              </Link2>
              <Link2 href="/about">
                <button className="bg-transparent hover:bg-white-500 text-white-700 font-semibold px-6 border border-white-500 hover:text-slate-300 rounded-3xl mt-2 md:mt-6 inline-block w-36 md:w-40 h-10">
                  About
                </button>
              </Link2>
            </div>
          </div>
          <div className="relative md:w-1/2">
            <Image
              src="/homeimg.png"
              alt="Interviewee's looking up questions"
              width="1400"
              height="1400"
              className="min-w-[450px] md:max-w-full mx-auto md:ml-0 mt-6 md:mt-0 hidden md:inline-block"
            />
          </div>
        </div>
      </main>
    </>
  );
}
