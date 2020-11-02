import React, { Component } from "react";
import "../../styles/ReservationPage.scss";
import { CSSTransition } from "react-transition-group";

class ReservationPage extends Component {
  state = {
    wholeApartmentDetails: false,
    halfApartmentDetails: false,

    wholeApartmentShowDescription: true,
    halfApartmentShowDescription: true,
  };

  onDescriptionHideHandler = (isWholeAp) => {
    if (isWholeAp)
      this.setState({
        wholeApartmentShowDescription: !this.state
          .wholeApartmentShowDescription,
      });
    else
      this.setState({
        halfApartmentShowDescription: !this.state.halfApartmentShowDescription,
      });
  };

  onMoreDetailsHandler = (isWholeAp) => {
    if (isWholeAp)
      this.setState({
        wholeApartmentDetails: !this.state.wholeApartmentDetails,
      });
    else
      this.setState({ halfApartmentDetails: !this.state.halfApartmentDetails });
  };

  render() {
    const {
      halfApartmentDetails,
      wholeApartmentDetails,
      halfApartmentShowDescription,
      wholeApartmentShowDescription,
    } = this.state;

    return (
      <div className="reservation-page__container">
        <h2>Pricing</h2>
        <div className="reservation-page__pricing-container">
          <div className="reservation-page__option-container">
            <h1>Whole Apartment</h1>
            <div
              className={
                wholeApartmentDetails
                  ? "reservation-page__features flip"
                  : "reservation-page__features"
              }
            >
              {wholeApartmentShowDescription && (
                <>
                  <p>
                    If you are brining the whole family or a lot of friends,
                    this would be the prefered option, since it adds up two more
                    beds with everyhing else from the first floor
                  </p>
                </>
              )}
              <CSSTransition
                in={wholeApartmentDetails}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => this.onDescriptionHideHandler(true)}
                onExited={() => this.onDescriptionHideHandler(true)}
              >
                <ul>
                  <li className="check">Kitchen</li>
                  <li className="check">Two Bathrooms and Toilets</li>
                  <li className="check">Flat-screen TV</li>
                  <li className="check">Outdoor dining area</li>
                  <li className="check">Sofa bed</li>
                  <li className="check">Two bedrooms</li>
                  <li className="check">Balcony</li>
                </ul>
              </CSSTransition>
            </div>
            <button onClick={() => this.onMoreDetailsHandler(true)}>
              More details
            </button>
          </div>
          {/* =================================================================================== */}
          <div className="reservation-page__option-container">
            <h1>First floor only</h1>
            <div
              className={
                halfApartmentDetails
                  ? "reservation-page__features flip"
                  : "reservation-page__features"
              }
            >
              {halfApartmentShowDescription && (
                <>
                  <p>
                    Perfect for couples, without the extra second floor you save
                    some money from the price and you still get an amazing
                    experience with everything in need.
                  </p>
                </>
              )}
              <CSSTransition
                in={halfApartmentDetails}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => this.onDescriptionHideHandler(false)}
                onExited={() => this.onDescriptionHideHandler(false)}
              >
                <ul>
                  <li className="check">Kitchen</li>
                  <li className="check">One Bathroom and Toilet</li>
                  <li className="check">Flat-screen TV</li>
                  <li className="check">Outdoor dining area</li>
                  <li className="check">Sofa bed</li>
                  <li className="check">One bedroom</li>
                  <li className="X">Balcony</li>
                </ul>
              </CSSTransition>
            </div>
            <button onClick={() => this.onMoreDetailsHandler(false)}>
              More details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationPage;
