import Image from "next/image";
import React from "react";
import Spinner from "./Spinner";

interface TechInterviewQuestionGeneratorProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  quoteLoading: boolean;
  quoteLoadingError: boolean;
}

export default function TechInterviewQuestionGenerator({
  handleSubmit,
  quote,
  setQuote,
  quoteLoading,
  quoteLoadingError,
}: TechInterviewQuestionGeneratorProps) {
  return (
    <>
      <main className="mt-10 flex flex-col justify-center items-center mx-auto relative min-h-[600px]">
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
