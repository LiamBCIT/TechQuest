/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Link2 from "next/link";

export default function About() {
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
          id="about"
          // className="mt-48 mx-80 flex flex-col text-left items-center justify-center animate-fadeIn animation-delay-2 animate-fadeIn animation-delay-2"
          className="mt-48 mb-4 mx-80 flex justify-center animate-fade min-width-[200px]"
        >
          <div className="mx-auto max-w-screen-lg flex mb-4 space-between space-x-40">
            <div className="">
              <h1 className="justify-items-center text-6xl md:text-4.688xl font-medium mb-12">
                About
                <br />
              </h1>
              <h3>
                Tired of spending hours searching for technical interview
                questions? Do you want to be prepared for any technical interview
                on the go? Enter TechQuest! <br />
                <br />
                TechQuest is a tool for anyone looking to improve their
                interview skills, from full stack developers to UX/UI
                You can generate custom interview questions based on your specific 
                skill set and level ofexperience. Plus, our database is constantly 
                updated with the latest and most relevant questions, so you can be 
                sure you're being tested on up to date terms.
                <br />
                <br />
                TechQuest isn't just for prepping for interviews. It's also a
                great way to practice and improve your technical knowledge in your
                free time. With our easy-to-use interface, you can generate
                questions and get instant feedback on your answers, all from the
                convenience of your mobile device.
                <br />
                <br />
                Whether you're a seasoned pro or just starting out, TechQuest
                is a great tool for putting your technical interview skills to the test. 
              </h3>
              <div className="flex">
                <Link2 href="/">
                  <button className="bg-white hover:bg-white-500 text-black font-semibold px-6 border border-white-500 hover:bg-slate-300 rounded-3xl mt-6 inline w-40 h-10">
                    Home
                  </button>
                </Link2>
              </div>
            </div>
            {/* <div className="">
              <img src="homeimg.png" alt="Interviewee's looking up questions" width="1400" height="1400"/>
            </div> */}
          </div>
</main>
    </>
  );
}
