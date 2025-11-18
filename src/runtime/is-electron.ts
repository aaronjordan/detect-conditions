import type { WhichJSRuntime } from "../types";

const c = "electron" as const;

export const whichRuntime: WhichJSRuntime = () => c;
