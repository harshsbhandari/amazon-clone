import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home"
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="12341234"
            title="Dell Alienware x15 R1 D569932WIN9 Gaming Laptop (11th Gen Core i7/ 16GB/ 1TB SSD/ Win 11/ 6GB Graph)"
            price={2500}
            image="https://cdn1.smartprix.com/rx-ixlGGBSdO-w1200-h1200/xlGGBSdO.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id="46538094"
            title="Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 256GB Storage)"
            price={1500}
            image="https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="12341234"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={29.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={4}
          />
          {/* Product */}
          <Product
            id="4903850"
            title="Samsung 28-Inch(70.85Cm) 3840 x 2160 Pixels 4K Gaming, UHD, IPS, 144 Hz, 1ms, Flat Monitor, HAS, Bezel-Less, HDR400, G-Sync Compatible, FreeSync Premium,..."
            price={199.99}
            image="https://m.media-amazon.com/images/I/81jn2-rGnMS._SL1500_.jpg"
            rating={3}
          />
          {/* Product */}
          <Product
            id="123454651"
            title="New Apple iPad Pro (12.9 inch, Wifi, 128GB) - Silver (4th Generation)"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="4903850"
            title="Samsung QWERVR45684REFS 49 LED Curved Gaming Monitor WQHD (5120 x 1440)"
            price={1095.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
