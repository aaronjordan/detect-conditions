import type { WhichJSRuntime } from "../types";

const c = "workerd" as const;

export const whichRuntime: WhichJSRuntime = () => c;
