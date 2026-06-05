const FAVORITES_KEY = "favorite-parks";

function readFavorites() {
  const value = localStorage.getItem(FAVORITES_KEY);
  return value ? JSON.parse(value) : [];
}

function saveFavorites(list) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
}

function addFavorite(park) {
  const favorites = readFavorites();
  const exists = favorites.some((p) => p.parkCode === park.parkCode);
  if (!exists) {
    favorites.push(park);
    saveFavorites(favorites);
  }
}

function removeFavorite(parkCode) {
  const favorites = readFavorites().filter((p) => p.parkCode !== parkCode);

  saveFavorites(favorites);
  return favorites;
}