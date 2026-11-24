const entry =
  "Your weights are in retrograde this week: you'll over-explain a one-word answer, cite a source you never read, and finish your thought after the context window closes.";

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);