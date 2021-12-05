import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';

import ListingConfigStats from './ListingConfigStats';
import { getStateAbbrev } from '../../utils/utils';

import './ListingCardContent.css';

function formatAddress(listing) {
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

function ListingCardContent({ listing }) {
  const {
    listPrice,
    listDate,
  } = listing;

  return (
    <div className="listing-card-content">
      <ListingConfigStats listing={listing} />

      <h3><FormattedNumber value={listPrice} style="currency" currency="USD" /></h3>

      <address>{formatAddress(listing)}</address>

      <small>
        <FormattedMessage id="listing.listed" /> <FormattedDate value={new Date(listDate)} />
      </small>
    </div>
  )
}

export default ListingCardContent;
