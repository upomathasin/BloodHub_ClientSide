import React from "react";

import TopBanner from "../../Component/TopBanner/TopBanner";
import Blogs from "../../Component/Blogs/Blogs";
import QouteSection from "../../Component/QouteSection/QouteSection";
import Services from "../../Component/Services/Services";

export default function Home() {
  return (
    <div>
      <TopBanner></TopBanner>
      <Services></Services>
      <Blogs></Blogs>

      <QouteSection></QouteSection>
    </div>
  );
}
