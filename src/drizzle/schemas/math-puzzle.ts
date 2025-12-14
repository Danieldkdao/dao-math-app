import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const difficultyLevels = ["easy", "medium", "hard"] as const;
export type DifficultyLevel = (typeof difficultyLevels)[number];
export const DifficultyLevelEnum = pgEnum(
  "math_puzzles_difficulty_level",
  difficultyLevels
);

export const MathPuzzleTable = pgTable("math_puzzle", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar().notNull(),
  difficulty: DifficultyLevelEnum().notNull(),
  problemText: varchar().notNull(),
  category: varchar().notNull(),
  solutionOutline: varchar().notNull(),
  answer: varchar().notNull(),
  hint: varchar().notNull(),
});
