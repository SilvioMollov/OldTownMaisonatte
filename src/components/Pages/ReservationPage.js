import React, { Component } from "react";
import "../../styles/ReservationPage.scss";

import viber from "../../assets/viber.svg";
import telephone from "../../assets/telephone.svg";
import email from "../../assets/email.svg";

class ReservationPage extends Component {
  render() {
    return (
      <div className="reservation-page__container">
        <h2>Pricing</h2>
        <div className="reservation-page__pricing-container">
          <div className="reservation-page__option-container">
            <h1>Whole Apartment</h1>
            <div className="reservation-page__features">
              <p>
                If you are brining the whole family or a lot of friends, this
                would be the prefered option, since it adds up two more beds
                with everyhing else from the first floor
              </p>

              <ul>
                <li className="check">Kitchen</li>
                <li className="check">Bathroom and toilet</li>
                <li className="check">Flat-screen TV</li>
                <li className="check">Outdoor dining area</li>
                <li className="check">Sofa bed</li>
                <li className="check">Two bedrooms</li>
                <li className="check">Balcony</li>
                <li className="check">Second Bathroom and toilet</li>
                <li className="check">Second Bedroom</li>
              </ul>
              <span>20000 per night</span>
            </div>
          </div>
          {/* =================================================================================== */}
          <div className="reservation-page__option-container">
            <h1>First floor only</h1>
            <div className="reservation-page__features">
              <p>
                Perfect for couples, without the extra second floor you save
                some money from the price and you still get an amazing
                experience with everything in need.
              </p>

              <ul>
                <li className="check">Kitchen</li>
                <li className="check">Bathroom and toilet</li>
                <li className="check">Flat-screen TV</li>
                <li className="check">Outdoor dining area</li>
                <li className="check">Sofa bed</li>
                <li className="check">Two bedrooms</li>
                <li className="X">Balcony</li>
                <li className="X">Second Bathroom and toilet</li>
                <li className="X">Second Bedroom</li>
              </ul>
              <span>10000 per night</span>
            </div>
          </div>
          <div className="reservation-page__contacts">
            <h2>Contacts us with a click!</h2>
            <div className="reservation-page_container">
              <div className="reservation-page__contacts-item">
                <img src={viber} alt="viber"></img>
                <a href="viber://chat/?number=%2B359886878677">
                  Chat with us on Viber
                </a>
              </div>
              <div className="reservation-page__contacts-item">
                <img src={telephone} alt="viber"></img>
                <a href="tel:+359886878677">Call us now!</a>
              </div>
              <div className="reservation-page__contacts-item">
                <img src={email} alt="viber"></img>
                <a
                  href="mailto:vasil97@yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send us an Email!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationPage;
