import './ListingCardImage.css'

function ListingCardImage({ imageUrl, alt, title }) {
  return (
    <img className="listing-card-image" src={imageUrl} alt={alt} title={title} />
  )
}

export default ListingCardImage;
