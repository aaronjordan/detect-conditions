/**
 * Conditions implemented by Node.js at its core.
 * https://nodejs.org/api/packages.html#conditional-exports
 */
export type CoreCondition =
	| "import"
	| "require"
	| "node"
	| "module-sync"
	| "node-addons"
	| "default";

/**
 * Community conditions listed by Node.js
 * https://nodejs.org/api/packages.html#community-conditions-definitions
 *
 * (We can't actually check for `types` as we need that for TS)
 */
export type CommonCondition =
	| "types"
	| "browser"
	| "development"
	| "production"
	| "default"
	| "module";

/**
 * A collection of conditions used by JS runtimes registered at
 * https://runtime-keys.proposal.wintercg.org/
 */
export type JSRuntime =
	| "edge-routine"
	| "arvancloud"
	| "azion"
	| "workerd"
	| "deno"
	| "lagon"
	| "react-native"
	| "moddable"
	| "netlify"
	| "electron"
	| "node"
	| "bun"
	| "react-server"
	| "edge-light"
	| "fastly"
	| "kiesel"
	| "wasmer";

/**
 * Conditions set by Webpack depending on the compilation's target environment.
 *
 * https://webpack.js.org/guides/package-exports/#target-environment
 */
export type WebpackTargetEnvironment =
	| "browser"
	| "electron"
	| "worker"
	| "worklet"
	| "node"
	| "deno"
	| "react-native";

/**
 * Returns `true` if this specific condition can _ever_ be reached by this entrypoint.
 *
 * For example, we would expect `canReach` from a "default" condition file to always return `true`.
 */
export type CanReach = () => boolean;
