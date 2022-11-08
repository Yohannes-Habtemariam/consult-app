import React from "react";
import { NavLink } from "react-router-dom";

import bitcoin from "../../assets/bitcoin-1.png";
import ethereum from "../../assets/ethereum-1.png";
import realEstate from "../../assets/real-estate.jpg";
import bonds from "../../assets/money-1.jpg";
import { HomePageData } from "../../data/Data";

import "./Home.scss";

const Home = () => {
  return (
    <main className="home-page-container">
      <section className="investment-options">
        <h1 className="title-of-home-page">Would you like to be financially independent?</h1>
        <p className="paragraphs-environmental-analysis-home-page">
          If your answer is yes, instead of you working to make money, make your money work for you. Hence, if you want to make money and get richer,
          invest your money in <span> cryptocurrencies</span>, <span>stocks</span>, <span> real estate</span>, <span>bonds</span>, and <span> other securities</span>. Perhaps you may need <span className="span-tech"> technical advice</span> on <span className="span"> where</span>,
          <span className="span"> how </span> and <span className="span">when</span> to invest. LisaConsult is here for you to make your dream come true. Just click the <NavLink to="/courseRegistration"> Registration Form</NavLink> to register faster for the course and you will enjoy an amazing life for
          the rest of your life.
        </p>

        <figure className="stock-market-elements">
          <img src={bitcoin} alt="Bitcoin" />
          <img src={ethereum} alt="Ethereum" />
          <img className="real-estate" src={realEstate} alt="Real Estate" />
          <img className="real-estate" src={bonds} alt="Real Estate" />
        </figure>
      </section>

      <section className="stock-market-analysis">

          {HomePageData.map(({title, paragraph, image1, image2, image3, image4, alt1, alt2, alt3, alt4}) => {
            return (
              <section className="specific-environment-analysis-container">
                <h2 className="sub-titles-of-home-page"> {title} </h2>
                <p className="paragraphs-environmental-analysis-home-page"> {paragraph} </p>
                <figure className="images-of-environmental-analysis">
                  <img src={image1} alt={alt1} />
                  <img src={image2} alt={alt2} />
                  <img src={image3} alt={alt3} />
                  <img src={image4} alt={alt4} />
                </figure>
              </section>
            )
            })}

      </section>

    </main>
  );
};

export default Home;
