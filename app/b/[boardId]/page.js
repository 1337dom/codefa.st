import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";

const getBoard = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);

  if (!board) {
    redirect("/");
  }

  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = await params;
  // Get board with ObjectID "boardId"
  const board = await getBoard(boardId);

  return <main>{board.name} (public)</main>;
}
