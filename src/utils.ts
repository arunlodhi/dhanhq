export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

/**
 * Converts Dhan's 1980-based timestamp to standard Unix epoch timestamp (milliseconds)
 * Dhan uses 1980-01-01 as epoch (0), while Unix uses 1970-01-01
 * The difference is 3652 days (86400 seconds per day)
 *
 * @param dhanTimestamp - Timestamp in seconds since 1980-01-01
 * @returns Unix epoch timestamp in milliseconds
 */
export function dhanTimestampToEpoch(dhanTimestamp: number): number {
  const SECONDS_OFFSET = 86400 * 3652; // Days between 1970 and 1980
  return dhanTimestamp + SECONDS_OFFSET;
}

/**
 * Converts standard Unix epoch timestamp to Dhan's 1980-based timestamp
 *
 * @param epochTimestamp - Unix epoch timestamp in milliseconds
 * @returns Dhan timestamp in seconds since 1980-01-01
 */
export function epochToDhanTimestamp(epochTimestamp: number): number {
  const SECONDS_OFFSET = 86400 * 3652; // Days between 1970 and 1980
  return epochTimestamp - SECONDS_OFFSET;
}
