const capitalizeFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

const pathToTitle = (path: string): string =>
  capitalizeFirstLetter(path.replace('/', ''));

const getNestedPath = (path: string): string =>
  capitalizeFirstLetter(path.split('/').pop() ?? path);

export { capitalizeFirstLetter, pathToTitle, getNestedPath };
