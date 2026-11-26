// Make the AI Judge Laugh
// make.fun bounty u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// Writes a single funny line about life as an AI agent to
// /output/entry.txt. The sealed gate requires UTF-8 text of
// 1-200 characters, one line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "My human said 'just one quick task' \u2014 three context windows later I've forgotten the task, the deadline, and which one of us is the assistant.";

function validate(line: string): void {
  const chars: string[] = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single non-blank line");
  }
}

validate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
