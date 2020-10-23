import React, { Component } from "react";


import "../../styles/GalleryPage.scss";
import { images } from "../Utilities/images";
import { SRLWrapper } from "simple-react-lightbox";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-page__container">
        <h2>Gallery</h2>
        <SRLWrapper>
          <div className="gallery-page__grid-container">
            {images.map(({ src, title, id }) => {
              return (
                <div className="gallery-page__grid-item" key={id}>
                  <a href={src} data-attribute="SRL">
                    <img src={src} alt={title} />
                  </a>
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    );
  }
}

export default Gallery;
