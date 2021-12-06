// add more states later, just need TX for now
const states = {
  "Texas": "TX",
  "California": "CA"
}

export const getStateAbbrev = (state) => states[state] || state;

export const formatAddress = (listing) => {
  if (!listing.address) {
    return '';
  }

  const { 
    address: {
      city, full, state
    }
  } = listing;

  return `${full}, ${city}, ${getStateAbbrev(state)}`;
}

export function getLocalStorage(key) {
  try {
    const listings = window.localStorage.getItem(key);
    return listings ? JSON.parse(listings) : listings;
  } catch(e) {
    // log error using https://sentry.io/ or similar
    return null;
  }
}

export function setLocalStorage(key, data) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch(e) {
    // log error using https://sentry.io/ or similar
    return;
  }
}

// adds or changes fave status for mlsId
// returns updated faves map
export function setFaveInLocalStorage(mlsId) {
  let faves = getLocalStorage('faves');
  if (!faves) {
    faves = {};
  }
  faves[mlsId] = !faves[mlsId];

  setLocalStorage('faves', faves);

  return faves;
}
