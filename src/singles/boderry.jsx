import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Boderry = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://www.boderry.com/?ref=W1OA7ww2rzqIc  ";

// Title
const title = "Boderry Watch Co";

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
          <p>
            <b>About:</b> Hey everyone, I’m excited to introduce you to
            Boderry, a watch company that is changing the way we think about
            luxury timepieces. Boderry is committed to providing its
            customers with high-quality, stylish watches at affordable
            prices. They believe that true quality should be within reach
            for all watch enthusiasts. Their watches are meticulously
            assembled in their independent watchmaking factory and undergo
            rigorous quality control measures. They use only the finest
            materials and components, and each watch is backed by a one-year
            warranty.
          </p>
          {/*
          <!-- para_1 --> */}
          <p>
            Boderry offers a wide variety of watches to choose from, so
            there is something for everyone. Whether you are looking for a
            classic dress watch, a sporty chronograph, or a rugged field
            watch, Boderry has you covered. They are also committed to
            authenticity and transparency. With Boderry, you can trust that
            your watch is made with high-quality components and
            craftsmanship, without the inflated price tag of some other
            brands.
          </p>
        </div>
        <ul>
          <h6>
            Here are just a few of the reasons why Boderry watches are so
            special:
          </h6>
          <li>SECURE PAYMENT</li>
          <li>Exceptional quality and craftsmanship</li>
          <li>Stylish designs to suit every taste</li>
          <li>FREE SHIPPING & 100% GUARANTEED DELIVERY</li>
          <li>30-DAY RETURNS & 24-MONTH WARRANTY</li>
        </ul>
      </section>
      {/*
      <!-- Coupon Code --> */}

      <section class="w-100">
        <CoupanCode 
        title={title} 
        websiteUrl={websiteUrl} 
        copytype={"save" + 50} 
        refCodeUrl={clipCopy}
        percentageTag={`Get $10 with a minimum purchase of $50. `} />
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

export default Boderry;