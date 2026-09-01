import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("health route source stays side-effect free", async () => {
  const route = await readFile(new URL("../app/health/route.js", import.meta.url), "utf8");

  assert.match(route, /NextResponse\.json\(\{ ok: true \}\)/);
  assert.doesNotMatch(route, /fetch\(|process\.env|await |POST|PUT|DELETE/);
});
