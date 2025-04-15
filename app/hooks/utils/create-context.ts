import * as React from 'react';

interface CreateContextOptions<T> {
  defaultValue?: T;
  errorMessage?: string;
  hookName?: string;
  name: string;
  providerName?: string;
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  strict?: boolean;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext<T>(options: CreateContextOptions<T>) {
  const {
    defaultValue,
    errorMessage,
    hookName = 'useContext()',
    name,
    providerName = `<${options.name}Provider>`,
    strict = true,
  } = options;

  const Context = React.createContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName),
      );
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
