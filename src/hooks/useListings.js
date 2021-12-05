import { useEffect, useState } from "react";
import { getListings } from '../api/api';

function getLocalStorage(key) {
  try {
    const listings = window.localStorage.getItem(key);
    return listings ? JSON.parse(listings) : listings;
  } catch(e) {
    // log error using https://sentry.io/ or similar
    return null;
  }
}
function setLocalStorage(key, data) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch(e) {
    // log error using https://sentry.io/ or similar
    return;
  }
}

function useListings() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState('loading');
 
  useEffect(() => {
    setStatus('loading');

    const lsListings = getLocalStorage('listings');
    if (lsListings) {
      console.log("loaded listings from cache")
      setListings(lsListings);
      setStatus('success');
    }

    // (async function fetchListings() {
    //   try {
    //     window.setTimeout(async () => {
    //       const listings = await getListings();
    //       setListings(listings);
  
    //       setStatus('success');
    //       console.log("loaded listings from api")
  
    //       setLocalStorage('listings', listings)
    //     }, 5000)

    //   } catch(e) {
    //     console.log('Error getListings', e);  // log error using https://sentry.io/ or similar
    //     setStatus('error');
    //   }
    // }());
  }, [])

  return {
    listings,
    status
  }
}

export default useListings;