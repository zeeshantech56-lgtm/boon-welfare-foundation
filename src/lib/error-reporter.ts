export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Log to console in development; swap in a real error-tracking SDK here if needed.
  console.error("[Error]", error, context);
}
