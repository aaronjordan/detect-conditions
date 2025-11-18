import type { WhichJSRuntime } from "../types";

const c = "lagon" as const;

export const whichRuntime: WhichJSRuntime = () => c;
