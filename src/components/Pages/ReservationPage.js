import React, { Component } from "react";
import "../../styles/ReservationPage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import viber from "../../assets/viber.svg";
import telephone from "../../assets/telephone.svg";
import email from "../../assets/email.svg";

class ReservationPage extends Component {
  onCopyTextHandler = (textValue, e) => {
    e.persist();
    let textArea = document.createElement("textarea");
    textArea.value = textValue;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand("copy");

      successful
        ? (e.target.style = "color: #CC9966")
        : (e.target.style = "color: red");

      setTimeout(() => {
        e.target.style = "color:white";
      }, 1000);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    document.body.removeChild(textArea);
  };

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
              <div className="reservation-page__contacts-item viber">
                <a href="viber://chat/?number=%2B359886878677">
                  <img src={viber} alt="viber"></img>
                  <span>Chat with us on Viber</span>
                </a>
              </div>
              <div className="reservation-page__contacts-item">
                <a href="tel:+359886878677">
                  <img src={telephone} alt="viber"></img>
                  <span id="phone">+359886878677</span>
                </a>
                <FontAwesomeIcon
                  className="reservation-page__copy-button"
                  icon={faCopy}
                  onClick={(e) => this.onCopyTextHandler("+359886878677", e)}
                ></FontAwesomeIcon>
              </div>

              <div className="reservation-page__contacts-item">
                <a
                  href="mailto:vasil97@yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={email} alt="viber"></img>
                  <span id="email">vasil97@yahoo.com</span>
                </a>
                <FontAwesomeIcon
                  className="reservation-page__copy-button"
                  icon={faCopy}
                  onClick={(e) =>
                    this.onCopyTextHandler("vasil97@yahoo.com", e)
                  }
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationPage;
