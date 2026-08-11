import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

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

describe("Frontmatter validity", () => {
  const mdxFiles = getMdxFiles(CONTENT_DIR);

  it("should find at least one MDX file to test", () => {
    expect(mdxFiles.length).toBeGreaterThan(0);
  });

  it("all MDX files have valid frontmatter with a non-empty title", () => {
    fc.assert(
      fc.property(fc.constantFrom(...mdxFiles), (filePath) => {
        const fileName = path.relative(CONTENT_DIR, filePath);
        const content = fs.readFileSync(filePath, "utf-8");

        let parsed: matter.GrayMatterFile<string>;
        try {
          parsed = matter(content);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          throw new Error(`Frontmatter parse error in ${fileName}: ${message}`);
        }

        if (!("title" in parsed.data)) {
          throw new Error(`Missing 'title' field in frontmatter of ${fileName}`);
        }

        const title = parsed.data.title;
        if (typeof title !== "string") {
          throw new Error(`'title' field in ${fileName} is not a string (got ${typeof title})`);
        }
        if (title.trim().length === 0) {
          throw new Error(`'title' field in ${fileName} is an empty string`);
        }
      }),
      { numRuns: 100 },
    );
  });
});
