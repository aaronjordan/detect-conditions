import type { WhichJSRuntime } from "../types";

const c = "azion" as const;

export const whichRuntime: WhichJSRuntime = () => c;
