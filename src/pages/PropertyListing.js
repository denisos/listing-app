import { useCallback } from "react";
import { FormattedMessage, useIntl } from 'react-intl'

import useListings from '../hooks/useListings';
import ListingCard from '../components/listingCard/ListingCard';
import PageHeader from '../components/pageHeader/PageHeader';

import './PropertyListing.css';

function PropertyListing() {
  const intl = useIntl();
  const { listings, status, setFave } = useListings();

  const handleFaveClick = useCallback((mlsId) => {
    setFave(mlsId)
  }, [setFave]);


  if (status === 'loading') {
    return <FormattedMessage tagName="h1" id="page.loading.loading" />;
  }

  if (status === 'error') {
    return <FormattedMessage tagName="h1" id="page.loading.error" />;
  }

  return (
    <>
      <PageHeader title={intl.formatMessage({id: 'listing.title'})}/>

      <ul className="property-listing">
        {listings.map((listing) => (
          <li key={listing.mlsId}>
            <ListingCard listing={listing} handleFaveClick={handleFaveClick} />
          </li>
        ))}
      </ul>
    </>
  )

}

export default PropertyListing;
