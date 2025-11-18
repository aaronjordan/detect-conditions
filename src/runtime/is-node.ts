import type { WhichJSRuntime } from "../types";

const c = "node" as const;

export const whichRuntime: WhichJSRuntime = () => c;
