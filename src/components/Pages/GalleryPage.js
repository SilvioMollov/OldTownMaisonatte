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

import "../../styles/GalleryPage.scss";
// import { SRLWrapper } from "simple-react-lightbox";
import { withTranslation } from "react-i18next";

class Gallery extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  onOpenHandler = (id) => {
    console.log(id);
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
