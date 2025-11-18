import type { WhichJSRuntime } from "../types";

const c = "deno" as const;

export const whichRuntime: WhichJSRuntime = () => c;
