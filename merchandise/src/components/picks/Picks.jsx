import React from "react";
import Img1 from "../../assets/mechan1.png";
// import Img1 from "../../assets/mechan1.png";
// import Img1 from "../../assets/mechan1.png";
import "./picks.css";
let CarteoryItems = [
  {
    id: 1,
    image: Img1,
    title: "T-shirts",
  },
  {
    id: 2,
    image: Img1,
    title: "Hoodies",
  },
  {
    id: 3,
    image: Img1,
    title: "Bags",
  },
  {
    id: 4,
    image: Img1,
    title: "Mugs",
  },
  {
    id: 5,
    image: Img1,
    title: "Others",
  },
];
const Picks = () => {
  CarteoryItems.map(({ id, image, title }) => {
    return (
      <section className="picks_section">
        <div className="intro">
          <p>
            Welcome to a space where style meets sustainability. Explore pieces
            crafted to make a difference—beautifully made, thoughtfully chosen,
            and gentle on the planet.
          </p>
          <button className="btn picksButton"> Shopp By cartegory</button>
        </div>
        <div className="Cartegory">
          <div className="cartegoryItem">
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </div>
        </div>
      </section>
    );
  });
};

export default Picks;
