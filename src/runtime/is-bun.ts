import type { WhichJSRuntime } from "../types";

const c = "bun" as const;

export const whichRuntime: WhichJSRuntime = () => c;
