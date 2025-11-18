import type { WhichJSRuntime } from "../types";

const c = "moddable" as const;

export const whichRuntime: WhichJSRuntime = () => c;
