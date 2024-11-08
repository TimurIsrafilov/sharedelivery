import StarRatings from "react-star-ratings";

function StarRating({ rating }) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="var(--yellow)"
      starDimension="18px"
      starSpacing="2px"
      numberOfStars={5}
      name="rating"
    />
  );
}

export default StarRating;
