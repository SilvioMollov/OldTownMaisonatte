import React, { Component } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import img1 from "../../assets/dining.jpg";
import img2 from "../../assets/DSC09016.jpg";
import img3 from "../../assets/DSC09025.jpg";
import img4 from "../../assets/DSC09041.jpg";
import img5 from "../../assets/DSC09056.jpg";
import img6 from "../../assets/DSC09086.jpg";
import img7 from "../../assets/DSC09108.jpg";
import img8 from "../../assets/DSC09113.jpg";
import img9 from "../../assets/DSC09124.jpg";
import img10 from "../../assets/DSC09127.jpg";
import img11 from "../../assets/IMG_3128.jpg";
import img12 from "../../assets/IMG_3129.jpg";
import img13 from "../../assets/IMG_3148.jpg";
import img14 from "../../assets/IMG_3152.jpg";
import img15 from "../../assets/IMG_20200209_173215.jpg";
import img16 from "../../assets/IMG_20200209_173515.jpg";
import img17 from "../../assets/IMG_20200209_174223.jpg";
import img18 from "../../assets/IMG_20200209_174244.jpg";
import img19 from "../../assets/IMG_20200209_174715.jpg";
import img20 from "../../assets/IMG_20200209_175521.jpg";
import img21 from "../../assets/IMG_20200209_175627.jpg";
import img22 from "../../assets/IMG_20200209_180914.jpg";
import img23 from "../../assets/IMG_20200209_181158.jpg";
import img24 from "../../assets/IMG_20200209_181309.jpg";

import "../../styles/GalleryPage.scss";
// import { SRLWrapper } from "simple-react-lightbox";
import { withTranslation } from "react-i18next";

class Gallery extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  onOpenHandler = (id) => {
    this.setState({
      isOpen: true,
      photoIndex: id - 1,
    });
  };

  render() {
    const { t } = this.props;
    const { photoIndex, isOpen } = this.state;
    const body = document.querySelector("body");

    const images = [
      {
        id: 1,
        src: img1,
        title: t("The Dining area"),
        description: "dining room from the right angle",
      },
      {
        id: 2,
        src: img2,
        title: t("The Outdoor space"),
        description: "garden from the right angle",
      },
      {
        id: 3,
        src: img3,
        title: t("The Outdoor space"),
        description: "garden from the left angle",
      },
      {
        id: 4,
        src: img4,
        title: t("The Outdoor space"),
        description: "garden from the right angle from the flowers",
      },
      {
        id: 5,
        src: img5,
        title: t("The Balcony"),
        description: "balcony",
      },
      {
        id: 6,
        src: img6,
        title: t("The Balcony"),
        description: "balcony from the right angle",
      },
      {
        id: 7,
        src: img7,
        title: t("The Master Bedroom"),
        description: "MasterBedroom from the left angle",
      },
      {
        id: 8,
        src: img8,
        title: t("The Master Bedroom"),
        description: "MasterBedroom from the right angle",
      },
      {
        id: 9,
        src: img9,
        title: t("The Living Room"),
        description: "LivingRoom from the left angle",
      },
      {
        id: 10,
        src: img10,
        title: t("The Kitchen and Living room"),
        description: "Kitchen from the far-back",
      },
      {
        id: 11,
        src: img11,
        title: "Ketchin",
        description: "The whole Kitchen area",
      },
      {
        id: 12,
        src: img12,
        title: "Dining Table",
        description: "Dining Table",
      },
      {
        id: 13,
        src: img13,
        title: "Dishwasher",
        description: "Dishwasher",
      },
      {
        id: 14,
        src: img14,
        title: "Kitchen",
        description: "Kitchen from the side angle",
      },
      {
        id: 15,
        src: img15,
        title: "Living room",
        description: "Living room with the staircase in sight",
      },
      {
        id: 16,
        src: img16,
        title: "Guest Bedroom",
        description: "Guest Bedroom",
      },
      {
        id: 17,
        src: img17,
        title: "Second floor Bathroom and toilet",
        description: "Second floor Bathroom and toilet",
      },
      {
        id: 18,
        src: img18,
        title: "Second floor Bathroom and toilet",
        description: "Second floor Bathroom and toilet",
      },
      {
        id: 19,
        src: img19,
        title: "Desk and mirror",
        description: "Desk and mirror",
      },
      {
        id: 20,
        src: img20,
        title: "First floor toilet",
        description: "First floor toilet",
      },
      {
        id: 21,
        src: img21,
        title: "Thermostat",
        description: "Thermostat",
      },
      {
        id: 22,
        src: img22,
        title: "Front Facede",
        description: "Front Facede",
      },
      {
        id: 23,
        src: img23,
        title: "Garage Door",
        description: "Garage Door",
      },
      {
        id: 24,
        src: img24,
        title: "Stair Case",
        description: "Stair Case",
      },
    ];

    isOpen
      ? (body.style = "overflow: hidden")
      : (body.style = "overflow: auto");

    return (
      <div className="gallery-page__container">
        <h2>{t("Gallery")}</h2>
        <div className="gallery-page__grid-container">
          {images.map(({ src, title, id }) => {
            return (
              <div
                className="gallery-page__grid-item"
                key={id}
                onClick={() => this.onOpenHandler(id)}
              >
                <img src={src} alt={title} />
              </div>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            clickOutsideToClose={true}
            imageTitle={images[photoIndex].title}
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default withTranslation("Gallery")(Gallery);
