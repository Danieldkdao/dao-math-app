"use server";

import { db } from "@/drizzle/db";
import {
  difficultyLevels,
  MathPuzzleTable,
  type DifficultyLevel,
} from "@/drizzle/schema";
import { inArray, sql } from "drizzle-orm";

export const getMathPuzzles = async ({
  numberOfPuzzles,
  difficulties,
}: {
  numberOfPuzzles: number;
  difficulties: DifficultyLevel[];
}) => {
  const parsedDifficulties =
    difficulties.length === 0 ? difficultyLevels : difficulties;
  const puzzles = await db
    .select()
    .from(MathPuzzleTable)
    .where(inArray(MathPuzzleTable.difficulty, parsedDifficulties))
    .orderBy(sql`RANDOM()`)
    .limit(numberOfPuzzles);
  if (puzzles.length === 0)
    return { error: true, message: "No puzzles found." };
  return { error: false, puzzles };
};

