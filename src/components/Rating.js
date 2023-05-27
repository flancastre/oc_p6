import star from "../assets/img/star.png";
import starVide from "../assets/img/starVide.png";

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <>
      {range.map((rangeElem) =>
        value >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src={star}
            alt="star"
            className="star"
          />
        ) : (
          <img
            key={rangeElem.toString()}
            src={starVide}
            alt="star-empty"
            className="star"
          />
        )
      )}
    </>
  );
}
export default Rating;
