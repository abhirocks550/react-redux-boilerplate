/**
 * index.js
 */
const logSomething = options => ({
  ...options,
  age: 26,
});

const options = logSomething({ one: '1', two: '2' });

console.log(options);
