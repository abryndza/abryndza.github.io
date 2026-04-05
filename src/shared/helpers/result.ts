export type Result<T, F> =
  | { success: true; data: T }
  | { success: false; failure: F };

export const success = <T>(data: T): Result<T, never> => ({
  success: true,
  data,
});

export const fail = <F>(failure: F): Result<never, F> => ({
  success: false,
  failure,
});

export const getPayload = <T, F>(result: Result<T, F>): T => {
  if (!result.success) {
    throw new Error(
      `Attempted to get payload from a failed result. Failure details: ${JSON.stringify(
        result.failure,
      )}`,
    );
  }
  return result.data;
};
