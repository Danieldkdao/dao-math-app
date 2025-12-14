import "dotenv/config";
import { db } from "@/drizzle/db";
import { MathPuzzleTable } from "@/drizzle/schema";

// Set array of puzzles you want to add to this values constant
// Then run npm run add
const values: (typeof MathPuzzleTable.$inferInsert)[] = [];

const addToDb = async () => {
  const response = await db.insert(MathPuzzleTable).values(values);
  console.log(response);
};

addToDb();
