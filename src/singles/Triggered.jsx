import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Triggered = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://triggeredbrand.store/?ref=g8ta7EWrPTrv";
// Title
const title = "The Triggered Brand"

return (
<div>
  {/* Header and NavBar */}
  <RoutingFile />
  {/*
  <!-- Main Heading --> */}
  <div className="mainContent pt-5">
    <h1 class="up">{title}</h1>
    <p className="text-center"> <b> Get High Quality Tattoo Equipment at Low Wholesale Prices</b></p>
    {/*
    <!-- side Text --> */}
    <div id="single-page">
      <section class="text_pra">
        <div class="top_img">
          {/*
          <!-- para_1 --> */}
          <p>
            <b>About:</b>  Guduchi The Ayurvedism has been founded with an objective to deliver the finest quality Ayurveda products (Medicines and Cosmetics), build trust about the effectiveness and safety of Ayurvedic medicines, and encourage the usage of more natural medicines that are native to our body.

          </p>
          <ul className="text-white">
          <h6>
          The store sells a wide range of Ayurvedic products, including products for the following health conditions:
          </h6>
          <li> Immune system support</li>
          <li> Digestive health</li>
          <li>Sleep problems</li>
          <li>Skin care</li>
          <li>Joint pain</li>
          <li>Weight management</li>
          <li>Stress relief</li>
          <li>Hair care</li>
       
        </ul>
        </div>
      
        
      </section>
      {/*
      <!-- Coupon Code --> */}
      <section class="w-100">
        <CoupanCode 
        title={title} 
        refCodeUrl={clipCopy} 
        websiteUrl={websiteUrl} 
        copytype={"Save" + 10}
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

export default Triggered;
