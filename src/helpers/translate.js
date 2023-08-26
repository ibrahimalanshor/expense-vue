import string from 'src/resources/string.json';

export function translate(keys, interpolate = {}) {
  const res = keys.split('.').reduce((messages, key) => {
    return messages[key];
  }, string);

  return Object.keys(interpolate).reduce(
    (char, current) => char.replace(`{${current}}`, interpolate[current]),
    res,
  );
}
