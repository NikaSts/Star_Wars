export const DATA_END_POINT = 'https://swapi.dev/api';
export const imageEndPoint = 'https://starwars-visualguide.com/assets/img';

export const Type = {
  PERSON: 'characters',
  PLANET: 'planets',
  STARSHIP: 'starships',
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const TOTAL_PLANETS_COUNT = 30;

export const buttons = ['people', 'planets', 'starships'];

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
