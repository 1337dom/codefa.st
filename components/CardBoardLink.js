"use client";

import { toast } from "react-hot-toast";

const CardBoardLink = ({ board }) => {
  const boardLink = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://dominikstruben.de"
  }/b/${board.toString()}`;

  const copyLink = () => {
    navigator.clipboard.writeText(boardLink);
    toast.success("Link copied to clipboard");
  };

  return (
    <div
      className="bg-base-100 rounded-2xl text-sm px-4 py-2.5 flex items-center gap-4 max-w-96"
      onClick={copyLink}
    >
      <p className="truncate">{boardLink}</p>
      <button className="btn btn-sm btn-neutral btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardBoardLink;
