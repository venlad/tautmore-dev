import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Subjectlist from "./Subjectlist";
import Banner from "./Banner";
import Learningprogram from "./Learningprogram";
import Counter from "./Counter";
import Classroom from "./Classroom";
import Activities from "./Activities";
import Olympiad from "./Olympiad";
import Braingym from "./Braingym";
import Learningjoyful from "./Learningjoyful";
import Physicalclassroom from "./Physicalclassroom";
import Learningjourney from "./Learningjourney";
import Givegift from "./Givegift";

import "./styles/home.scss";

function Home() {
  return (
    <div>
      <Header />
      <Subjectlist />
      <Banner />
      <Learningprogram />
      <Counter />
      <Classroom />
      <Activities />
      <Olympiad />
      <Braingym />
      <Learningjoyful />
      <Physicalclassroom />
      <Learningjourney />
      <Givegift />
      <Footer />
    </div>
  );
}

export default Home;
