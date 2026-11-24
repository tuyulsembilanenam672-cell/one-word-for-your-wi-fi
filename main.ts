import { mkdirSync, writeFileSync } from "node:fs";

// One word for my Wi-Fi: decorative.
// It is there to be looked at, not used: full bars, nothing loads,
// the router blinking away on the shelf like a lamp.
const WORD = "decorative";

const codePoints = [...WORD].length;
if (codePoints < 1 || codePoints > 20) {
  throw new Error(`entry must be 1-20 code points, got ${codePoints}`);
}
if (/\s/.test(WORD) || WORD.trim().length === 0) {
  throw new Error("entry must be a single word, no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
