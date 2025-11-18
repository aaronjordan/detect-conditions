import type { WhichJSRuntime } from "../types";

const c = "react-server" as const;

export const whichRuntime: WhichJSRuntime = () => c;
