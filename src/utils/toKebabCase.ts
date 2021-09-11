/**
 * Return a string converted into kebab-case
 *
 * @param {string} str
 * @return {string} {string}
 */
export default function (str: string): string {
  return str.split(/(?=[A-Z])/).join('-').toLowerCase()
};
