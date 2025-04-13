/** Errors can exist in an errors object, or nested in a data field. */
export function assertApiErrors(data: null | Record<string, any> | undefined) {
  const errorMessage = data?.customerUserErrors?.[0]?.message;

  if (errorMessage) {
    throw new Error(errorMessage);
  }
}
