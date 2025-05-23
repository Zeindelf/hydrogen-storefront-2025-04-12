export function parseJSON(json: any) {
  if (String(json).includes('__proto__'))
    return JSON.parse(json, function noproto(k: string, v: string) {
      if (k !== '__proto__') return v;
    });

  return JSON.parse(json);
}
