import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Form } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";

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
        <h1>TechQuest</h1>
        <h2>powered by GPT-3</h2>
        <div>
          Enter a topic and the AI will generate a technical interview questions
        </div>
        {/* image can go here */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Create a interview questions...</Form.Label>
            <Form.Control
              name="prompt"
              type="text"
              placeholder="e.g. full-stack, front-end, backend..."
              maxLength={100}
            />
          </Form.Group>
          <Button type="submit" className="mb-3" disabled={quoteLoading}>
            Make me a question
          </Button>
        </Form>
        {quoteLoading && <Spinner animation="border" />}
        {quoteLoadingError && (
          <div>There was an error loading the interview questions</div>
        )}
        {quote && <h5>{quote}</h5>}
      </main>
    </>
  );
}
