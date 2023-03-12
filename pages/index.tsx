import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";

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
          <h1 className="text-3xl md:text-4xl font-medium mb-12">
            Enter the Job Title
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-center">
              <input
                className="p-3 w-full border rounded-3xl bg-transparent max-w-sm text-center placeholder:text-white hover:bg-transparent active:bg-transparent"
                id="prompt"
                name="prompt"
                type="text"
                placeholder="e.g. full-stack, front-end, backend..."
                maxLength={100}
              />
            </div>
            <div className="mb-4 flex justify-center">
              <textarea
                className="p-5 h-64 w-full border rounded-3xl bg-transparent max-w-sm placeholder:text-neutral-400 hover:bg-transparent active:bg-transparent"
                id="prompt"
                name="prompt"
                placeholder="response goes here..."
                maxLength={100}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>
            <div className="text-center mt-6 tracking-widest font-bold text-base">
              {quoteLoading
                ? "Loading..."
                : "Hit enter to generate a interview question!"}
            </div>
            <button
              type="submit"
              className="hidden"
              disabled={quoteLoading}
            ></button>
          </form>
          {quoteLoading && <Spinner />}
          {quoteLoadingError && (
            <div className="mt-12 border-white">
              There was an error loading the interview questions
            </div>
          )}
        </div>
      </main>
    </>
  );
}
