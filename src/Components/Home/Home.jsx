import React from "react";
import Header from "../Header/Header";
import HeroPage from "../HomePage/HomePage";
import TopProducts from "../TopProducts/TopProducts";
import About from "../About/About";
import Service from "../ServicePage/Service";
import BigDeals from "../BigDeals/BigDeals";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "100%", margin: 0, padding: 0 }}>
      <Header />
      <HeroPage />
      <TopProducts />
      <About />
      <Service />
      <BigDeals />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
