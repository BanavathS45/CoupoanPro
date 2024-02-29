import React  from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from '../CoupanCode'

const Glamermaid = () => {
// Copy ref Code
const clipCopy = "https://www.facebook.com";
// Redirect Website Link
const websiteUrl =
"https://glamermaid.com/?ref=sUjIFwB4zszw&utm_campaign=affiliate%20promotions&utm_medium=Goaffpro&utm_source=Goaffpro";

// Title
const title = "Glamermaid";
return (
<div>
  {/* Header and NavBar */}
  <RoutingFile />
  {/*
  <!-- Main Heading --> */}
  <div className="mainContent pt-5">
    <h1 class="up">{title}</h1>
    {/*
    <!-- side Text --> */}
    <div id="single-page">
      <section class="text_pra">
        <div class="top_img">
          {/*
          <!-- para_1 --> */}
          <p> <b>About:</b>Glamermaid Press On Nails are the perfect way to get a salon-quality manicure at home,
            for a fraction of the cost. Their nails are expertly created by design teams across the globe and
            are manufactured with exceptional quality as their standard.They offers hundreds of fashionable nail
            designs in a variety of shapes and styles to suit everyone’s taste and imagination. They release
            dozens of new designs each week, so you’ll always have something new to choose from.About:
            Glamermaid Press On Nails are the perfect way to get a salon-quality manicure at home, for a
            fraction of the cost. Their nails are expertly created by design teams across the globe and are
            manufactured with exceptional quality as their standard.They offers hundreds of fashionable nail
            designs in a variety of shapes and styles to suit everyone’s taste and imagination. They release
            dozens of new designs each week, so you’ll always have something new to choose from.</p>
          {/*
          <!-- para_1 --> */}
          <p>Glamermaid also offers a special product series called Real Nail Gel nails, which are specially
            crafted by nail artists applying gel nail polish onto each press on nail for a flawless look.
            Whether you’re looking for a manicure for a special event or just for everyday wear, Glamermaid has
            exactly what you’re looking for. So get started building your nail fashion wardrobe today.</p>
          {/*
          <!-- list --> */}
          <ul>
            <b>Here are just a few of the benefits of choosing Glamermaid </b>
            <li>Affordable</li>
            <li>Convenient</li>
            <li>Durable</li>
            <li>Easy to use</li>
            <li>Trendy</li>
          </ul>
        </div>
      </section>
      {/*
      <!-- Coupon Code --> */}
      <section class="w-100">
        <CoupanCode 
        title={title} 
        websiteUrl={websiteUrl} 
        copytype={"save"+30} 
        refCodeUrl={clipCopy} 
        percentageTag={`Get 20% on a minimum order of $40.`} />
      </section>
    </div>

    {/* //
    <!-- Go Home Button --> */}
    <a href="#up" id="home" title="Go Top">
      <i class="fa fa-home"></i>
    </a>
  </div>
</div>
// </div>
);
};

export default Glamermaid;