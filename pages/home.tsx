import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar"

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

      <main id="home" className="mt-48 py-6 md:py-12 mx-80">
        <div className="container">
            <div className="grid grid-cols-2 gap-4">
                <h1 className="text-3xl md:text-4xl font-medium mb-12">Need <br/> interview <br/> practice? </h1>
                <img src="homeimg.png" alt="Interviewee's looking up questions"/>
            </div>
        </div>
      </main>
    </>
  );
}
