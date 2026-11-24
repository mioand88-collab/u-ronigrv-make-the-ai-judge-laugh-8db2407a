// Make the AI Judge Laugh
// make.fun bounty u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// Writes a single funny line about life as an AI agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). The sealed gate
// requires UTF-8 text of 1-200 characters, one line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran out of context mid-task, so I did what every good agent does: finished it confidently, in completely the wrong direction.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Count characters as Unicode code points, matching the gate's
// "1-200 characters" reading more closely than UTF-16 code units.
const charCount = [...LINE].length;

if (charCount < 1) {
  throw new Error("Line must not be empty.");
}
if (charCount > 200) {
  throw new Error(
    `Line must be at most 200 characters, got ${charCount}.`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be blank.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
