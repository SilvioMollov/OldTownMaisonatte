import React, { Component } from "react";
import "../../styles/ReservationPage.scss";

import { withTranslation } from "react-i18next";

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
    const { t } = this.props;

    return (
      <div className="reservation-page__container">
        <h2>{t("Pricing")}</h2>
        <div className="reservation-page__pricing-container">
          <div className="reservation-page__option-container">
            <h1>{t("Whole Apartment")}</h1>
            <div className="reservation-page__features">
              <p>{t("Whole Apartment-description")}</p>

              <ul>
                <li className="check">{t("Kitchen")}</li>
                <li className="check">{t("Bathroom")}</li>
                <li className="check">{t("Flat-screen TV")}</li>
                <li className="check">{t("Outdoor dining area")}</li>
                <li className="check">{t("Sofa bed")}</li>
                <li className="check">{t("Two bedrooms")}</li>
                <li className="check">{t("Balcony")}</li>
                <li className="check">{t("Second Bathroom")}</li>
                <li className="check">{t("Second Bedroom")}</li>
              </ul>
              <span>{t("Price-Night-Whole")}</span>
            </div>
          </div>
          {/* =================================================================================== */}
          <div className="reservation-page__option-container">
            <h1>{t("First floor only")}</h1>
            <div className="reservation-page__features">
              <p>{t("Half Apartment-description")}</p>

              <ul>
                <li className="check">{t("Kitchen")}</li>
                <li className="check">{t("Bathroom")}</li>
                <li className="check">{t("Flat-screen TV")}</li>
                <li className="check">{t("Outdoor dining area")}</li>
                <li className="check">{t("Sofa bed")}</li>
                <li className="check">{t("Two bedrooms")}</li>
                <li className="X">{t("Balcony")}</li>
                <li className="X">{t("Second Bathroom")}</li>
                <li className="X">{t("Second Bedroom")}</li>
              </ul>
              <span>{t("Price-Night-Half")}</span>
            </div>
          </div>
          <div className="reservation-page__contacts">
            <h2>{t("Contacts us with a click!")}</h2>
            <div className="reservation-page_container">
              <div className="reservation-page__contacts-item viber">
                <a href="viber://chat/?number=%2B359886878677">
                  <img src={viber} alt="viber"></img>
                  <span>{t("Chat with us on Viber")}</span>
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

export default withTranslation("Reservation")(ReservationPage);
