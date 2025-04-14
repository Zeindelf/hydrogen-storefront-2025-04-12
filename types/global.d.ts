declare global {
  interface Window {
    [key: PropertyKey]: object[];
  }
}

export {}
