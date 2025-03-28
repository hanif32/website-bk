"use client";

import React from "react";
import Main from "./components/main";
import Discusion from "./components/dicusion";
import About from "./components/about";
import Services from "./components/services";
import Team from "./components/team";
import Power from "./components/power";
import Testimonials from "./components/testimonial";
import { News } from "./components/news";

const ComplaintPage: React.FC = () => {
  return (
    <div className="container">
      <Main />
      <Discusion />
      <About />
      <Services />
      <Team />
      <Power />
      <Testimonials />
      <News/>
    </div>
  );
};

export default ComplaintPage;
