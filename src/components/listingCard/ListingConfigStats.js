import { FormattedMessage } from 'react-intl';

import './ListingConfigStats.css';

function ListingConfigStats( { listing }) {
  const { 
    property: {
      area,
      bathsFull,
      bathsHalf,
      bedrooms,
    } 
  } = listing;

  const baths = bathsHalf ? bathsFull + bathsHalf /2 : bathsFull;

  return (
    <div className="listing-config-stats">
      <FormattedMessage 
        id="listing.config" 
        tagName="p"
        values={{
          bedrooms,
          baths, 
          area
        }}
      />
    </div>
  )
}

export default ListingConfigStats;
