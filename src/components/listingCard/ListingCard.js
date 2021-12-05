import './ListingCard.css';

import ListingCardImage from './ListingCardImage';
import ListingCardContent from './ListingCardContent';
import { formatAddress } from '../../utils/utils';

function ListingCard({ listing, handleFave }) {
  const {
    property: {
      area,
      bathsFull,
      bathsHalf,
      bedrooms,
    },
    address: {
      state,
      full,
      city
    },
    mlsId,
    listPrice,
    listDate,
    photos,
    isFave
  } = listing;

  const imageUrl = photos[0];

  return (
    <div className="listing-card" tabIndex="0">

      <ListingCardImage imageUrl={imageUrl} alt={formatAddress(listing)} title={formatAddress(listing)}/>

      <ListingCardContent listing={listing} />

    </div>
  )
}

export default ListingCard;