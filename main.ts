import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Grandma ladled rice straight from the steaming pot onto my chipped blue plate, and I still measure every good day against that summer evening, when the whole kitchen smelled like home and dinner would never end.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
