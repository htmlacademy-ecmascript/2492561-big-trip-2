function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function checkFavorite(item) {
  return (item) ? 'event__favorite-btn--active' : '';
}

export {getRandomInt, getRandomArrayElement, checkFavorite};
