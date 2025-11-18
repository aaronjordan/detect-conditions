import type { WhichJSRuntime } from "../types";

const c = "edge-routine" as const;

export const whichRuntime: WhichJSRuntime = () => c;
