import * as React from 'react';

export const Document = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <head>
        <title>My Remix App</title>
        <link href="/styles/global.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
};
