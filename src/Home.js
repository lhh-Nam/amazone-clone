import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The learn startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Dash Go Everyday Mixer - PASTEL BLUE"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71aoMAXDY4L._AC_SX569_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Cloud Blue – US Version"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51TW3mi50nL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/613HESgMbAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Samsung Galaxy S10 Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Fingerprint ID and Facial Recognition | Long-Lasting Battery | Prism Black (SM-G973U1ZKAX)"
            price={789.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61eCdKZk17L._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung C49J890DKU 49' LED Curved Black Computer Monitor"
            price={(1, 501.99)}
            image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
