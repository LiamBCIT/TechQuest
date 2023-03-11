import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar"

export default function Home() {
  const [quote, setQuote] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteLoadingError, setQuoteLoadingError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formaData = new FormData(e.target as HTMLFormElement);
    const prompt = formaData.get("prompt")?.toString().trim();

    if (prompt) {
      try {
        setQuote("");
        setQuoteLoading(true);
        setQuoteLoadingError(false);
        const response = await fetch(
          "/api/quest?prompt=" + encodeURIComponent(prompt)
        );
        const data = await response.json();
        console.log("data", data);
        setQuote(data.quote);
      } catch (error) {
        console.error(error);
        setQuoteLoadingError(true);
      } finally {
        setQuoteLoading(false);
      }
    }
  }

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

      <main className="mt-48 py-6 md:py-12 justify-center">
      <div className="container px-4 mx-auto justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-12">Enter the Job Title</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label className="block font-medium mb-2" htmlFor="prompt">
              Create a interview questions...
            </label> */}
            <input
              className="px-3 py-2 w-full border rounded-lg"
              id="prompt"
              name="prompt"
              type="text"
              placeholder="e.g. full-stack, front-end, backend..."
              maxLength={100}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed mt-8 border-white"
            disabled={quoteLoading}
          >
            {quoteLoading ? "Loading..." : "Generate a question"}
          </button>
        </form>
          {quoteLoading && <Spinner animation="border" className="mt-8" />}
          {quoteLoadingError && (
            <div className="mt-12 border-white">There was an error loading the interview questions</div>
          )}
          {quote && <h5 className="mt-8 border-white">{quote}</h5>}
        </div>
      </main>
    </>
  );
}
