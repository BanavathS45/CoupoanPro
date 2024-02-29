import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const RhinoUSA = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://www.rhinousainc.com/collections/all-product-by-rhino-usa?ref=save20";
// Title
const title = "Rhino USA";

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
            <b>About:</b> Rhino USA is a small family business founded by a father and two sons from Temecula, California. They design and distribute high-quality powersports accessories that are backed by a lifetime guarantee and personalized customer service. They loves the outdoors and the freedom of riding motorcycles, going off-roading, boating, hiking, drinking beer around the campfire, and living life to the fullest. Whatever you do, the Rhino Team is 100% committed to helping you blaze your own trail with confidence and to safely adventure where you want, when you want.
 
          </p>
          
        </div>
        <ul className="text-white">
          <h6>
          Here are just a few of the reasons why you should choose Rhino USA powersports accessories:
          </h6>
          <li> <b>Exceptional quality and craftsmanship:</b> Rhino USA products are meticulously designed and engineered to withstand the rigors of outdoor adventure.</li>
          <li><b>Lifetime warranty: </b> Rhino USA offers a lifetime warranty on all of its products, so you can rest assured that your investment is protected.</li>
          <li><b>Personalized customer service:</b> The Rhino USA team is passionate about helping their customers find the right products for their needs and budget. They are always available to answer questions and provide support.</li>
          <br />
          <li>Wide variety of products to choose from: Rhino USA offers a wide variety of products for all types of powersports enthusiasts, including:
            <ul>
                <li>Vehicle tie-down kits</li>
                <li>Recovery gear</li>
                <li>Storage solutions</li>
                <li>Camping gear</li>
                <li>Tire Repair Kits</li>
             
            </ul>
          </li>
       
        </ul>
        
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

export default RhinoUSA;
