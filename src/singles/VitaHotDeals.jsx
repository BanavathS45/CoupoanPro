import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const VitaHotDeals = () => {
  // Copy ref Code
  const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
  // Redirect Website Link
  const websiteUrl = "https://vitahotdeals.com/?ref=Sl-edQXotwBvN  ";
  // Title
  const title = "VitaHotDeals";

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
                <b>About:</b> VitaHotDeals is a vitamin and supplement company
                that is dedicated to helping people reach their health and
                fitness goals. They offer the newest and hottest products on the
                market at the absolute best price you can find. VitaHotDeals is
                committed to providing its customers with the highest quality
                products and services. They offer a 30-day money back guarantee
                on all of their products, so you can buy with confidence.
                Whether you are looking for a multivitamin, a protein powder, or
                a weight loss supplement, VitaHotDeals has the perfect product
                for you.
              </p>
            </div>
          </section>
          {/*
      <!-- Coupon Code --> */}
          <section class="w-100">
            <CoupanCode
              title={title}
              refCodeUrl={clipCopy}
              websiteUrl={websiteUrl}
              copytype={"Save" + 20}
              percentageTag={`Get 10% off on all products.`}
            />
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

export default VitaHotDeals;
