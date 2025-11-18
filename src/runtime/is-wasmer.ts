import type { WhichJSRuntime } from "../types";

const c = "wasmer" as const;

export const whichRuntime: WhichJSRuntime = () => c;
