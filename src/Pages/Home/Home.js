import React from "react";

import TopBanner from "../../Component/TopBanner/TopBanner";
import Blogs from "../../Component/Blogs/Blogs";
import QouteSection from "../../Component/QouteSection/QouteSection";
import Services from "../../Component/Services/Services";
import ParalaxSection from "../../Component/ParalaxSection/ParalaxSection";

export default function Home() {
  return (
    <div>
      <TopBanner></TopBanner>
      <Services></Services>
      <Blogs></Blogs>
      <ParalaxSection></ParalaxSection>

      <QouteSection></QouteSection>
    </div>
  );
}
