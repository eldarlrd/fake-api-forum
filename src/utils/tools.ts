const pathToTitle = (path: string): string => {
  const pathnameWOSlash = path.replace('/', '');

  return pathnameWOSlash.charAt(0).toUpperCase() + pathnameWOSlash.slice(1);
};

const getNestedPath = (path: string): string => {
  const pathnameNested = path.split('/').pop() ?? path;

  return pathnameNested.charAt(0).toUpperCase() + pathnameNested.slice(1);
};

export { pathToTitle, getNestedPath };
