import { whichCondition as whichCommonCondition } from "detect-conditions/_internal/which/common";
import { whichCondition as whichCoreCondition } from "detect-conditions/_internal/which/core";
import { whichCondition as whichRuntime } from "detect-conditions/_internal/which/runtime";
import { whichCondition as whichWebpackTargetEnvironment } from "detect-conditions/_internal/which/webpack";

/**
 * Returns the most specific condition detected in each category.
 */
export function detect() {
	return {
		core: whichCoreCondition(),
		common: whichCommonCondition(),
		runtime: whichRuntime(),
		webpack: whichWebpackTargetEnvironment(),
	};
}
