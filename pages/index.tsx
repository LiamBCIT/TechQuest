import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";

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
        className="mt-8 md:mt-16 lg:mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-40 max-w-4xl">
          <div className="p-3">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 md:mb-12">
              Need <br className="hidden md:inline-block" /> interview{" "}
              <br className="hidden md:inline-block" /> practice?
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-6">
              Fast & easy technical interview questions{" "}
              <br className="hidden md:inline-block" /> powered by Artificial
              Intelligence.
            </h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="w-full md:w-auto h-10 px-6 rounded-3xl border border-white-500 bg-white text-black font-semibold hover:bg-slate-300">
                Demo
              </button>
              <button className="w-full md:w-auto h-10 px-6 rounded-3xl border border-white-500 text-white-700 font-semibold hover:text-slate-300">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <img
              src="homeimg.png"
              alt="Interviewee's looking up questions"
              className="hidden md:inline-block w-full max-w-[500px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
