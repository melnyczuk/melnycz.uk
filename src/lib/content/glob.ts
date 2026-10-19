// Map of `{ filename-without-extension: contents }` from an eager `import.meta.glob`
export const byName = <T>(modules: Record<string, T>): Record<string, T> =>
  Object.fromEntries(
    Object.entries(modules).map(([path, value]) => [
      path.replace(/^.*\/|\.[^.]+$/g, ''),
      value,
    ])
  );
