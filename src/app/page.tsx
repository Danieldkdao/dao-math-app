"use client";

import MarkdownRenderer from "@/components/markdown-renderer";
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
  CircleX,
  LightbulbIcon,
  SkipForwardIcon,
  XCircleIcon,
  CircleQuestionMark,
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
  userAnswer: string;
  skipped: boolean;
  usedHint: boolean;
};

const HomePage = () => {
  const [mathPuzzles, setMathPuzzles] = useState<
    (typeof MathPuzzleTable.$inferSelect)[]
  >([]);
  const [results, setResults] = useState<Result[]>([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("options");
  const [numberOfPuzzles, setNumberOfPuzzles] = useState<number | null>(null);
  const [difficulties, setDifficulties] = useState<DifficultyLevel[]>([]);
  const [allowHints, setAllowHints] = useState(true);

  const reset = () => {
    setMathPuzzles([]);
    setResults([]);
    setCurrentPuzzleIndex(0);
    setNumberOfPuzzles(null);
    setDifficulties([]);
    setAllowHints(true);
    setStage("options");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
      {stage === "solving" ? (
        <Solving
          mathPuzzles={mathPuzzles}
          setResults={setResults}
          setStage={setStage}
          allowHints={allowHints}
          currentPuzzleIndex={currentPuzzleIndex}
          setCurrentPuzzleIndex={setCurrentPuzzleIndex}
        />
      ) : stage === "finish" ? (
        <Finish results={results} reset={reset} />
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

const Solving = ({
  mathPuzzles,
  setResults,
  allowHints,
  setStage,
  currentPuzzleIndex,
  setCurrentPuzzleIndex,
}: {
  mathPuzzles: (typeof MathPuzzleTable.$inferSelect)[];
  setResults: Dispatch<SetStateAction<Result[]>>;
  allowHints: boolean;
  setStage: Dispatch<SetStateAction<Stage>>;
  currentPuzzleIndex: number;
  setCurrentPuzzleIndex: Dispatch<SetStateAction<number>>;
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [usedHint, setUsedHint] = useState(false);
  const [currentResult, setCurrentResult] = useState<
    "correct" | "incorrect" | "skipped" | null
  >(null);

  const progress = Math.round(
    ((currentPuzzleIndex + 1) / mathPuzzles.length) * 100
  );
  const currentPuzzle = mathPuzzles[currentPuzzleIndex];

  const checkAnswer = (skipped = false) => {
    if (skipped) {
      const puzzleResult = {
        mathPuzzle: currentPuzzle,
        userAnswer,
        skipped,
        usedHint,
      };
      setResults((prev) => [...prev, puzzleResult]);
      setCurrentResult("skipped");
      return;
    }
    if (!userAnswer.trim()) return toast.error("User answer cannot be empty.");
    const result =
      currentPuzzle.answer.trim() === userAnswer.trim() ? "correct" : "incorrect";
    const puzzleResult = {
      mathPuzzle: currentPuzzle,
      userAnswer,
      skipped,
      usedHint,
    };
    setResults((prev) => [...prev, puzzleResult]);
    setCurrentResult(result);
  };

  const nextPuzzle = () => {
    if (currentPuzzleIndex + 1 >= mathPuzzles.length) return setStage("finish");
    setUsedHint(false);
    setUserAnswer("");
    setCurrentResult(null);
    setCurrentPuzzleIndex((prev) => prev + 1);
  };

  return (
    <div className="container p-4 space-y-4 max-h-[calc(100%-2rem)] overflow-y-auto">
      <Card>
        <CardContent className="flex items-center gap-2">
          <p className="text-muted-foreground">
            <span className="text-lg font-semibold text-primary">
              {currentPuzzleIndex + 1}
            </span>
            /{mathPuzzles.length}
          </p>
          <Progress value={progress} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl md:text-4xl">
              {currentPuzzle.title}
            </CardTitle>
            <Button
              variant="outline"
              disabled={!allowHints || currentResult !== null || usedHint}
              className={allowHints ? "cursor-pointer" : "cursor-not-allowed"}
              onClick={() => setUsedHint(true)}
            >
              <span>Hint</span>
              <LightbulbIcon />
            </Button>
          </div>

          <div className="flex gap-2">
            <Badge variant="outline" className="capitalize">
              {currentPuzzle.difficulty}
            </Badge>
            <Badge variant="outline">{currentPuzzle.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-muted-foreground">
            <MarkdownRenderer content={currentPuzzle.problemText} />
          </div>
          {usedHint && (
            <div className="bg-warning-foreground rounded-md p-4 text-warning text-sm">
              <MarkdownRenderer content={currentPuzzle.hint} />
            </div>
          )}
          <div className="flex gap-4">
            <Input
              placeholder="Your answer goes here..."
              value={userAnswer}
              readOnly={currentResult !== null}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <div className="flex gap-2">
              <Button
                disabled={currentResult !== null}
                onClick={() => checkAnswer(true)}
                variant="secondary"
                className="cursor-pointer"
              >
                Skip
              </Button>
              <Button
                className="cursor-pointer"
                onClick={() =>
                  currentResult == null ? checkAnswer() : nextPuzzle()
                }
              >
                {currentResult == null
                  ? "Check Answer"
                  : currentPuzzleIndex + 1 >= mathPuzzles.length
                  ? "Finish"
                  : "Next"}
              </Button>
            </div>
          </div>
          {currentResult ? (
            currentResult === "correct" ? (
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="solution"
                  className="bg-success-foreground rounded-md"
                >
                  <AccordionTrigger className="px-4 flex items-center cursor-pointer">
                    <div className="text-success flex items-center gap-2">
                      <CircleCheckIcon className="size-4" />
                      <span className="text-md no-underline">
                        Correct! The answer is {currentPuzzle.answer}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="text-success">
                      <MarkdownRenderer
                        content={currentPuzzle.solutionOutline}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : currentResult === "incorrect" ? (
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="solution"
                  className="bg-destructive-foreground rounded-md"
                >
                  <AccordionTrigger className="px-4 flex items-center cursor-pointer">
                    <div className="text-destructive flex items-center gap-2">
                      <CircleX className="size-4" />
                      <span className="text-md no-underline">
                        Sorry, incorrect... The answer is {currentPuzzle.answer}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="text-destructive">
                      <MarkdownRenderer
                        content={currentPuzzle.solutionOutline}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="solution"
                  className="rounded-md text-muted-foreground bg-muted-foreground/15"
                >
                  <AccordionTrigger className="px-4 flex items-center cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CircleQuestionMark className="size-4" />
                      <span className="text-md no-underline">
                        The answer is {currentPuzzle.answer}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div>
                      <MarkdownRenderer
                        content={currentPuzzle.solutionOutline}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const Finish = ({
  results,
  reset,
}: {
  results: Result[];
  reset: () => void;
}) => {
  const total = results.length;
  const skipped = results.filter((res) => res.skipped).length;
  const correct = results.filter(
    (res) =>
      !res.skipped &&
      res.userAnswer.trim().toLowerCase() ===
        res.mathPuzzle.answer.trim().toLowerCase()
  ).length;
  const incorrect = total - correct - skipped;
  const hintsUsed = results.filter((res) => res.usedHint).length;
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
    <div className="container flex h-full max-h-[calc(100vh-2rem)] min-h-0 flex-col space-y-6 overflow-hidden py-2">
      <div className="grid h-full min-h-0 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BarChart3Icon className="size-5 text-primary" />
              Session Summary
            </CardTitle>
            <CardDescription>
              Quick snapshot of how this session went.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2 rounded-lg border bg-muted/40 p-3">
              <div className="flex w-full items-center justify-between">
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-semibold">{accuracy}%</p>
              </div>
              <div className="w-full">
                <Progress value={accuracy} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg p-3 border border-success/40 bg-success-foreground/20 text-success">
                <p className="text-success">Correct</p>
                <p className="text-lg font-semibold">{correct}</p>
              </div>
              <div className="rounded-lg p-3 border border-destructive/40 bg-destructive-foreground/20 text-destructive">
                <p>Incorrect</p>
                <p className="text-lg font-semibold">{incorrect}</p>
              </div>
              <div className="rounded-lg border border-warning/40 p-3 bg-warning-foreground/20 text-warning">
                <p>Skipped</p>
                <p className="text-lg font-semibold">{skipped}</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Hints Used</p>
                <p className="text-lg font-semibold">{hintsUsed}</p>
              </div>
            </div>
            <Button className="w-full cursor-pointer" onClick={reset}>
              Start New Session
            </Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 flex min-h-0 max-h-full flex-col overflow-clip">
          <CardHeader className="shrink-0">
            <CardTitle className="text-xl">Puzzle Breakdown</CardTitle>
            <CardDescription>
              Each problem with your answer, correctness, and hint usage.
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-0 space-y-4 overflow-y-auto p-4">
            {results.map((res, index) => {
              const isCorrect =
                res.userAnswer.trim().toLowerCase() ===
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
                      <Badge variant="outline">
                        {res.mathPuzzle.category}
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
                  <div className="mt-3 text-sm text-muted-foreground">
                    <MarkdownRenderer content={res.mathPuzzle.problemText} />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md border border-border/60 bg-muted/40 p-3 text-sm">
                      <p className="text-muted-foreground">Your answer</p>
                      <p className="font-medium">
                        {res.userAnswer.trim()
                          ? res.userAnswer
                          : "No answer given"}
                      </p>
                    </div>
                    <div className="rounded-md border border-border/60 bg-success-foreground/20 p-3 text-sm">
                      <p className="text-success">Correct answer</p>
                      <p className="font-medium text-success">
                        {res.mathPuzzle.answer}
                      </p>
                    </div>
                  </div>
                  {res.mathPuzzle.solutionOutline ? (
                    <div className="mt-3 rounded-md border border-border/60 bg-muted/30 p-3 text-sm space-y-2">
                      <p className="text-muted-foreground">Solution outline</p>
                      <hr className="text-muted-foreground" />
                      <div className="font-medium text-foreground/70">
                        <MarkdownRenderer
                          content={res.mathPuzzle.solutionOutline}
                        />
                      </div>
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
    if (numberOfPuzzles < 1 || !Number.isInteger(numberOfPuzzles))
      return toast.error("Invalid puzzle amount.");
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
