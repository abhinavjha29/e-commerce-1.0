import React from "react";
import Style from "./Trusted.module.css";
const Trusted = () => {
  return (
    <div className={`container ${Style.brand_section}`}>
      <h3>Trusted By 1000+ Companies</h3>
      <div className={Style.brand_section_slider}>
        {/* my 1st img  */}
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
            alt="trusted-brands"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
