import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
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
        className="mt-48 mx-80 flex flex-col text-left items-center justify-center animate-fadeIn animation-delay-2"
      >
        <div className="flex mb-4 space-between space-x-40">
          <div className="">
            <h1 className="justify-items-center text-6xl md:text-4.688xl font-medium mb-12">
              Need <br /> interview <br /> practice?{" "}
            </h1>
            <h3>
              Fast & easy technical interview questions <br /> powered by
              Artificial Intelligence.
            </h3>
            <div className="flex">
              {/* <button className="bg-white text-black py-6 mb-12 px-12 border border-white-50 rounded-3xl hover:bg-slate-300 w-40 h-10">Demo</button> */}
              <button className="bg-white hover:bg-white-500 text-black font-semibold px-6 border border-white-500 hover:bg-slate-300 rounded-3xl mt-6 inline w-40 h-10">
                Demo
              </button>
              <button className="ml-4 bg-transparent hover:bg-white-500 text-white-700 font-semibold px-6 border border-white-500 hover:text-slate-300 rounded-3xl mt-6 inline w-40 h-10">
                Sign Up
              </button>
            </div>
          </div>
          <div className="">
            <img
              src="homeimg.png"
              alt="Interviewee's looking up questions"
              width="1400"
              height="1400"
            />
          </div>
        </div>
      </main>
    </>
  );
}
