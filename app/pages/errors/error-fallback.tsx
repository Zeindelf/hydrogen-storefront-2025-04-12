export type ErrorFallbackProps = {
  error?: {
    message: string;
    stack?: string;
  };
};

export const ErrorFallback = ({error}: ErrorFallbackProps) => {
  console.error('Boundary Error: ', error);

  return (
    <div
      className="flex h-svh w-full flex-col items-center justify-center"
      role="alert"
    >
      <section className="container flex flex-col items-center justify-center">
        <h1 className="text-center">Something has gone seriously wrong</h1>

        <p>
          It&apos;s always time for a coffee break. We should be back by the
          time you finish your coffee.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4">
          {error?.stack && (
            <pre
              className="hidden"
              dangerouslySetInnerHTML={{
                __html: addLinksToStackTrace(error.stack),
              }}
              style={{
                background: 'hsla(10, 50%, 50%, 0.1)',
                color: 'red',
                maxWidth: '100%',
                overflow: 'auto',
                padding: '2rem',
              }}
            />
          )}

          <a
            aria-label="Back to homepage"
            className="text-blue-500 underline"
            href="/"
            title="Back to Home"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

ErrorFallback.displayName = 'ErrorFallback';

function addLinksToStackTrace(stackTrace: string) {
  return stackTrace?.replace(
    /^\s*at\s?.*?[(\s]((\/|\w\:).+)\)\n/gim,
    (all, m1) =>
      all.replace(
        m1,
        `<a href="vscode://file${m1}" class="hover:underline">${m1}</a>`,
      ),
  );
}
