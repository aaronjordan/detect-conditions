/**
 * Returns `true` if this specific condition can _ever_ be reached by this entrypoint.
 *
 * For example, we would expect `canReach` from a "default" condition file to always return `true`.
 */
export function canReach(): boolean;
