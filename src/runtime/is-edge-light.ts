import type { WhichJSRuntime } from "../types";

const c = "edge-light" as const;

export const whichRuntime: WhichJSRuntime = () => c;
