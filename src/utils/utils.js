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
