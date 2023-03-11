import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Spinner } from "react-bootstrap";
import { FormEvent, useState } from "react";

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
      <main>
        <h1 className="text-4xl font-bold mb-4">TechQuest</h1>
        <h2 className="text-lg font-medium mb-4">powered by GPT-3</h2>
        <div className="mb-4">
          Enter a topic and the AI will generate a technical interview questions
        </div>
        {/* image can go here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="prompt">
              Create a interview questions...
            </label>
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
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={quoteLoading}
          >
            {quoteLoading ? "Loading..." : "Make me a question"}
          </button>
        </form>
        {quoteLoading && <Spinner animation="border" />}
        {quoteLoadingError && (
          <div>There was an error loading the interview questions</div>
        )}
        {quote && <h5>{quote}</h5>}
      </main>
    </>
  );
}
