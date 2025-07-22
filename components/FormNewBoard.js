"use client";

import { useState } from "react";

const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      fetch("/api/board", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // 2. Redirect to dedicated board page
    } catch (error) {
      // 1. Display error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-xl mb-4">Create a new feedback board</h1>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Board name</legend>
        <input
          required
          type="text"
          className="input  w-full"
          placeholder="Type here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>
      <button className="btn btn-primary btn-block" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create board
      </button>
    </form>
  );
};

export default FormNewBoard;
