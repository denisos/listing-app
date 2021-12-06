import { useEffect, useState } from "react";
import { getListings } from '../api/api';
import { getLocalStorage, setLocalStorage, setFaveInLocalStorage } from '../utils/utils';


const updateListingsForFave = (listings, favesMap) => {
  if (!favesMap) {
    return listings;
  }

  const newListings =  listings.map((listing) => {
    // if there's a value we need to set it
    const faveValue = favesMap[listing.mlsId];
    if (faveValue !== undefined) {
      return {
        ...listing,
        isFave: faveValue
      }
    }

    return listing;
  });

  return newListings;
}


function useListings() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState('loading');

  function setFave(mlsId) {
    // update the cache
    const favesMap = setFaveInLocalStorage(mlsId);

    setListings((prevListings) => {
      return updateListingsForFave(prevListings, favesMap)
    });
  }
 
  useEffect(() => {
    setStatus('loading');

    const lsListings = getLocalStorage('listings');
    if (lsListings) {
      setListings(lsListings);
      setStatus('success');
    }

    (async function fetchListings() {
      try {
        // added setTimeout for testing purposes to test cache
        // window.setTimeout(async () => {
          // retrieve listings
          const listings = await getListings();

          // merge with faves info
          const newListings = updateListingsForFave(listings, getLocalStorage('faves'));
          setListings(newListings);
          setStatus('success');
  
          // replace what's in localStorage (could also check if it's stale or not or if changed)
          setLocalStorage('listings', newListings);
        // }, 5000)

      } catch(e) {
        console.log('Error getListings', e);  // log error using https://sentry.io/ or similar
        setStatus('error');
      }
    }());

  }, [])

  return {
    listings,
    status,
    setFave
  }
}

export default useListings;