import redWine from "../pics/red-wine.png";
import "../styling/Advert.css"

function Advert(props) {
  return (
    <>
      <div className="advert-container">
        <div className="image-container">
          <img src={redWine} alt="red wine" />
        </div>
        <div className="flex-container">
          <div>
            <div className="advert-text-container">
              40% off your valentines order this February.
            </div>
            <div className="button-container">
              <button onClick={props.executeScroll} className="shop-button">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advert;
