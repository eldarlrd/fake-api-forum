export const pathToTitle = (path: string): string => {
  const pathnameWOSlash = path.replace('/', '');

  return pathnameWOSlash.charAt(0).toUpperCase() + pathnameWOSlash.slice(1);
};
