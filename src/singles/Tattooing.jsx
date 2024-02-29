import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Tattooing = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://yilongtattooing.com/?ref=save10";
// Title
const title = "Yilong Tattooing";

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
            <b>About:</b>   Yilong is more than just a brand of tattoo machines. It’s a symbol of passion, creativity, and excellence in tattooing. We are committed to providing tattoo artists with the highest-quality, innovative, and versatile tattoo machines that inspire and empower them to unleash their creativity and express their unique style. Our machines are designed and manufactured with the utmost attention to detail and quality, and are backed by comprehensive customer support, including technical assistance, training, and after-sales service. At Yilong, we believe that tattooing is not just a job, but a true art form, and we are proud to support tattoo artists in their artistic journey.


          </p>
          <ul className="text-white">
          <h6>
          They Offer Additional Benfits Like:
          </h6>
          <li> Low Price</li>
          <li> Professional Support Team</li>
          <li>Fast And Reliable Shipping</li>
       
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
        percentageTag={`Get 20% off on all products.`}
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

export default Tattooing;
