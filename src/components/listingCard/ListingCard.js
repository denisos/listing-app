import { useCallback } from "react";
import ListingCardImage from './ListingCardImage';
import ListingCardContent from './ListingCardContent';
import Fave from '../fave/Fave';
import { formatAddress } from '../../utils/utils';

import './ListingCard.css';

function ListingCard({ listing, handleFaveClick}) {
  const {
    mlsId,
    photos,
    isFave
  } = listing;
  const imageUrl = photos[0];

  const handleFaveClickLocal = useCallback(() => {
    handleFaveClick(mlsId);
  }, [handleFaveClick, mlsId]);

  return (
    <div className="listing-card" tabIndex="0">

      <ListingCardImage imageUrl={imageUrl} alt={formatAddress(listing)} title={formatAddress(listing)}/>

      <Fave isFave={isFave} handleClick={handleFaveClickLocal} />

      <ListingCardContent listing={listing} />

    </div>
  )
}

export default ListingCard;
