import { describe, it, expect } from "vitest";
import { glossary, resolveGlossaryEntry } from "../../src/data/glossary";
import * as fs from "node:fs";
import * as path from "node:path";

const CONTENT_DIR = path.resolve(__dirname, "../../src/content/docs");

function getMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

describe("Glossary validity", () => {
  const keys = Object.keys(glossary);

  it("has non-empty string definitions for every key", () => {
    expect(keys.length).toBeGreaterThan(5);
    for (const key of keys) {
      const { definition } = resolveGlossaryEntry(glossary[key]);
      expect(typeof definition).toBe("string");
      expect(definition!.trim().length).toBeGreaterThan(10);
    }
  });

  it("keys are in ascending alphabetical order", () => {
    const sorted = [...keys].sort((a, b) => a.localeCompare(b));
    expect(keys).toEqual(sorted);
  });

  it("every Tooltip term in MDX exists in the glossary", () => {
    const termRe = /<Tooltip\s+term="([^"]+)"/g;
    for (const file of getMdxFiles(CONTENT_DIR)) {
      const content = fs.readFileSync(file, "utf-8");
      for (const match of content.matchAll(termRe)) {
        const term = match[1].toLowerCase();
        expect(term in glossary, `${path.basename(file)}: unknown term "${term}"`).toBe(true);
      }
    }
  });
});
