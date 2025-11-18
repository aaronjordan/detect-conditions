import type { WhichJSRuntime } from "../types";

const c = "fastly" as const;

export const whichRuntime: WhichJSRuntime = () => c;
