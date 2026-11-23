import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const review =
  "Sleep is the only subscription that bills me eight hours a night and still leaves me tired.";

// Gate guard: the entry must be one non-blank line of 1 to 160 characters.
if (review.length < 1 || review.length > 160) {
  throw new Error(`review must be 1-160 characters, got ${review.length}`);
}
if (review.includes("\n") || review.includes("\r")) {
  throw new Error("review must be a single line");
}
if (review.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
