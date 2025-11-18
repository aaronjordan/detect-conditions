import type { WhichJSRuntime } from "../types";

const c = "react-native" as const;

export const whichRuntime: WhichJSRuntime = () => c;
