// import '../../style/components/Rating.css'

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <>
      {range.map((rangeElem) =>
        value >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src="../img/star.png"
            alt="star"
            className="star"
          />
        ) : (
          <img
            key={rangeElem.toString()}
            src="../img/starVide.png"
            alt="star-empty"
            className="star"
          />
        )
      )}
    </>
  );
}
export default Rating;
