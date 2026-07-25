type LogContext = Record<string, string | number | boolean | null | undefined>;

function cleanContext(context: LogContext = {}) {
  return Object.fromEntries(
    Object.entries(context).filter(([, value]) => value !== undefined && value !== null),
  );
}

export const logger = {
  info(message: string, context?: LogContext) {
    console.info(`[portfolio] ${message}`, cleanContext(context));
  },
  warn(message: string, context?: LogContext) {
    console.warn(`[portfolio] ${message}`, cleanContext(context));
  },
  error(message: string, context?: LogContext) {
    console.error(`[portfolio] ${message}`, cleanContext(context));
  },
};
