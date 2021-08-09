const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomNumber = () => Math.random();

export { getRandomInteger, getRandomNumber };
