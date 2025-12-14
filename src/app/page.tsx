"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoadingSwap } from "@/components/ui/loading-swap";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  difficultyLevels,
  type DifficultyLevel,
  type MathPuzzleTable,
} from "@/drizzle/schema";
import { getMathPuzzles } from "@/features/math-puzzles/actions";
import {
  BarChart3Icon,
  CheckCircle2Icon,
  CircleCheckIcon,
  LightbulbIcon,
  SkipForwardIcon,
  XCircleIcon,
} from "lucide-react";
import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { toast } from "sonner";

type Stage = "options" | "solving" | "finish";

type Result = {
  mathPuzzle: typeof MathPuzzleTable.$inferSelect;
  answer: string;
  skipped: boolean;
  usedHint: boolean;
};

const HomePage = () => {
  const [mathPuzzles, setMathPuzzles] = useState<
    (typeof MathPuzzleTable.$inferSelect)[]
  >([]);
  const [results, setResults] = useState<Result[]>([]);
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [stage, setStage] = useState<Stage>("finish");
  const [numberOfPuzzles, setNumberOfPuzzles] = useState<number | null>(null);
  const [difficulties, setDifficulties] = useState<DifficultyLevel[]>([]);
  const [allowHints, setAllowHints] = useState(true);
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {stage === "solving" ? (
        <Solving />
      ) : stage === "finish" ? (
        <Finish results={results} />
      ) : (
        <Options
          difficulties={difficulties}
          setDifficulties={setDifficulties}
          numberOfPuzzles={numberOfPuzzles}
          setNumberOfPuzzles={setNumberOfPuzzles}
          allowHints={allowHints}
          setAllowHints={setAllowHints}
          setMathPuzzles={setMathPuzzles}
          setStage={setStage}
        />
      )}
    </div>
  );
};

export default HomePage;

const Solving = () => {
  return (
    <div className="container p-4 space-y-4 max-h-[calc(100%-2rem)] overflow-y-auto">
      <Card>
        <CardContent>
          <Progress />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl md:text-4xl">Problem # 10</CardTitle>
            <Button variant="outline" className="cursor-pointer">
              <span>Hint</span>
              <LightbulbIcon />
            </Button>
          </div>

          <div className="flex gap-2">
            <Badge variant="outline">Hard</Badge>
            <Badge variant="outline">Algebra</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            voluptates iure! Libero debitis necessitatibus, perferendis fuga
            itaque fugiat temporibus ratione dolorum fugit suscipit vero,
            voluptatibus explicabo labore accusantium hic nemo?
          </p>
          <div className="bg-warning-foreground rounded-md p-4 text-warning">
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse
              illo nisi corporis reiciendis eveniet accusantium quis autem non
              laudantium. Veritatis tempora corporis voluptatem, quo assumenda
              maiores distinctio enim aliquid!
            </p>
          </div>
          <div className="flex gap-4">
            <Input />
            <div className="flex gap-2">
              <Button variant="secondary">Skip</Button>
              <Button>Check Answer</Button>
            </div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="solution"
              className="bg-success-foreground rounded-md"
            >
              <AccordionTrigger className="px-4 flex items-center cursor-pointer">
                <div className="text-success flex items-center gap-2">
                  <CircleCheckIcon />
                  <span className="text-lg no-underline">
                    Correct! The answer is 10
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-success">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto rem aliquam, officia, pariatur sint dolorum
                  voluptatibus, harum reprehenderit voluptas facilis dolore iure
                  repellendus aspernatur soluta assumenda voluptatem? Nobis,
                  assumenda nulla!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="solution"
              className="bg-destructive-foreground rounded-md"
            >
              <AccordionTrigger className="px-4 flex items-center cursor-pointer">
                <div className="text-destructive flex items-center gap-2">
                  <CircleCheckIcon />
                  <span className="text-lg no-underline">
                    Sorry, incorrect... The answer is 10
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-destructive">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto rem aliquam, officia, pariatur sint dolorum
                  voluptatibus, harum reprehenderit voluptas facilis dolore iure
                  repellendus aspernatur soluta assumenda voluptatem? Nobis,
                  assumenda nulla!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

const Finish = ({ results }: { results?: Result[] }) => {
  const placeholderResults: Result[] = [
    {
      mathPuzzle: {
        id: "1",
        title: "Prime Staircase",
        difficulty: "easy",
        problemText:
          "Find the next step in the prime staircase: 2, 3, 5, 11, 17, ?",
        solutionOutline: "Notice the staircase skips primes with growing gaps.",
        answer: "23",
        hint: "Look at the differences between consecutive primes.",
      },
      answer: "23",
      skipped: false,
      usedHint: false,
    },
    {
      mathPuzzle: {
        id: "2",
        title: "Matrix Fold",
        difficulty: "medium",
        problemText:
          "A 3x3 matrix folds along its main diagonal. Which entries overlap?",
        solutionOutline:
          "Trace each cell to its mirrored partner across the diagonal.",
        answer: "All off-diagonal pairs overlap; diagonals stay in place.",
        hint: "Sketch the grid and fold it physically or mentally.",
      },
      answer: "All off-diagonal pairs overlap; diagonals stay in place.",
      skipped: false,
      usedHint: true,
    },
    {
      mathPuzzle: {
        id: "3",
        title: "Rapid Sums",
        difficulty: "hard",
        problemText: "What is the sum of the first 20 positive integers?",
        solutionOutline: "Use the arithmetic series formula n(n+1)/2.",
        answer: "210",
        hint: "Pair the first and last numbers.",
      },
      answer: "",
      skipped: true,
      usedHint: true,
    },
  ];

  const data = results?.length ? results : placeholderResults;
  const total = data.length;
  const skipped = data.filter((res) => res.skipped).length;
  const correct = data.filter(
    (res) =>
      !res.skipped &&
      res.answer.trim().toLowerCase() ===
        res.mathPuzzle.answer.trim().toLowerCase()
  ).length;
  const incorrect = total - correct - skipped;
  const hintsUsed = data.filter((res) => res.usedHint).length;
  const accuracy = Math.round((correct / Math.max(total - skipped, 1)) * 100);

  const renderStatusBadge = (
    status: "correct" | "incorrect" | "skipped"
  ): ReactNode => {
    if (status === "correct") {
      return (
        <Badge className="border-transparent bg-success-foreground text-success">
          <CheckCircle2Icon className="size-3.5" />
          Correct
        </Badge>
      );
    }
    if (status === "incorrect") {
      return (
        <Badge className="border-transparent bg-destructive-foreground text-destructive">
          <XCircleIcon className="size-3.5" />
          Incorrect
        </Badge>
      );
    }
    return (
      <Badge className="border-transparent bg-warning-foreground text-warning">
        <SkipForwardIcon className="size-3.5" />
        Skipped
      </Badge>
    );
  };

  return (
    <div className="space-y-6 container py-2">
      <div className="grid gap-4 md:grid-cols-3 max-h-[calc(100%-2rem)]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BarChart3Icon className="size-5 text-primary" />
              Session Summary
            </CardTitle>
            <CardDescription>
              Quick snapshot of how this run went.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-3">
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-semibold">{accuracy}%</p>
              </div>
              <div className="w-28">
                <Progress value={accuracy} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Correct</p>
                <p className="text-lg font-semibold text-success">{correct}</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Incorrect</p>
                <p className="text-lg font-semibold text-destructive">
                  {incorrect}
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Skipped</p>
                <p className="text-lg font-semibold text-warning">{skipped}</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Hints Used</p>
                <p className="text-lg font-semibold">{hintsUsed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 max-h-full overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-xl">Puzzle Breakdown</CardTitle>
            <CardDescription>
              Each problem with your answer, correctness, and hint usage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.map((res, index) => {
              const isCorrect =
                res.answer.trim().toLowerCase() ===
                res.mathPuzzle.answer.trim().toLowerCase();
              const status = res.skipped
                ? "skipped"
                : isCorrect
                ? "correct"
                : "incorrect";
              return (
                <div
                  key={res.mathPuzzle.id ?? index}
                  className="rounded-lg border bg-card/40 p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Puzzle {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {res.mathPuzzle.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="capitalize">
                          {res.mathPuzzle.difficulty}
                        </Badge>
                        {renderStatusBadge(status)}
                        {res.usedHint ? (
                          <Badge className="border-transparent bg-warning-foreground text-warning">
                            <LightbulbIcon className="size-3.5" />
                            Hint used
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p className="font-medium">Answer key</p>
                      <p className="text-foreground">
                        {res.mathPuzzle.answer || "Not provided"}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {res.mathPuzzle.problemText}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md border border-border/60 bg-muted/40 p-3 text-sm">
                      <p className="text-muted-foreground">Your answer</p>
                      <p className="font-medium">
                        {res.answer.trim() ? res.answer : "No answer given"}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/60 bg-success-foreground/20 p-3 text-sm">
                      <p className="text-muted-foreground">Correct answer</p>
                      <p className="font-medium text-success">
                        {res.mathPuzzle.answer}
                      </p>
                    </div>
                  </div>
                  {res.mathPuzzle.solutionOutline ? (
                    <div className="mt-3 rounded-md border border-border/60 bg-muted/30 p-3 text-sm">
                      <p className="text-muted-foreground">Solution outline</p>
                      <p className="font-medium text-foreground">
                        {res.mathPuzzle.solutionOutline}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Options = ({
  numberOfPuzzles,
  setNumberOfPuzzles,
  difficulties,
  setDifficulties,
  allowHints,
  setAllowHints,
  setMathPuzzles,
  setStage,
}: {
  numberOfPuzzles: number | null;
  setNumberOfPuzzles: Dispatch<SetStateAction<number | null>>;
  difficulties: DifficultyLevel[];
  setDifficulties: Dispatch<SetStateAction<DifficultyLevel[]>>;
  allowHints: boolean;
  setAllowHints: Dispatch<SetStateAction<boolean>>;
  setMathPuzzles: Dispatch<
    SetStateAction<(typeof MathPuzzleTable.$inferSelect)[]>
  >;
  setStage: Dispatch<SetStateAction<Stage>>;
}) => {
  const [loading, setLoading] = useState(false);
  const startSession = async () => {
    if (numberOfPuzzles == null || !String(numberOfPuzzles).trim())
      return toast.error("Please set a number of puzzles.");
    setLoading(true);
    const res = await getMathPuzzles({ numberOfPuzzles, difficulties });
    if ((res.error && res.message) || !res.puzzles) {
      setLoading(false);
      return toast.error(res.message ?? "Failed to start session.");
    }
    setMathPuzzles(res.puzzles);
    setStage("solving");
    setLoading(false);
  };

  return (
    <div className="container p-4 space-y-4 max-h-[calc(100%-2rem)] overflow-y-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl">
            Session Options
          </CardTitle>
          <CardDescription className="text-md">
            Configure the settings for your training session.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground">Number of Puzzles</label>
            <Input
              type="number"
              value={numberOfPuzzles ?? ""}
              onChange={(e) =>
                setNumberOfPuzzles(
                  e.target.value === "" ? null : Number(e.target.value)
                )
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground">
              Difficulty of Puzzles
            </label>
            <MultiSelect
              onValuesChange={(e) => setDifficulties(e as DifficultyLevel[])}
            >
              <MultiSelectTrigger className="w-full cursor-pointer">
                <MultiSelectValue placeholder="Select difficulties" />
              </MultiSelectTrigger>
              <MultiSelectContent>
                <MultiSelectGroup>
                  {difficultyLevels.map((diff, index) => (
                    <MultiSelectItem
                      value={diff}
                      key={index}
                      className="cursor-pointer"
                    >
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </MultiSelectItem>
                  ))}
                </MultiSelectGroup>
              </MultiSelectContent>
            </MultiSelect>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground">Allow Hints</label>
            <Switch
              checked={allowHints}
              onCheckedChange={() => setAllowHints(!allowHints)}
              className="cursor-pointer"
            />
          </div>
          <Button
            onClick={startSession}
            disabled={loading}
            className="w-full cursor-pointer"
          >
            <LoadingSwap isLoading={loading}>Start Session</LoadingSwap>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
