import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Tempest = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "= https://shop.weatherflow.com/?ref=14T5bqE5ZEB37";
// Title
const title = "Tempest Weather Flow";

return (
<div>
  {/* Header and NavBar */}
  <RoutingFile />
  {/*
  <!-- Main Heading --> */}
  <div className="mainContent pt-5">
    <h1 class="up">{title}</h1>
    <p className="text-center"> <b> WeatherFlow-Tempest: The Future of Weather Forecasting</b></p>
    {/*
    <!-- side Text --> */}
    <div id="single-page">
      <section class="text_pra">
        <div class="top_img">
          {/*
          <!-- para_1 --> */}
          <p>
            <b>About:</b>  I’m excited to tell you about WeatherFlow-Tempest, a technology company leading the way in the private sector weather industry. They use exclusive crowdsourced data and AI-driven modeling to deliver accurate, actionable weather information to their customers, helping them make better decisions and save money.


          </p>
          <p>In an increasingly data-driven world impacted by more severe weather due to climate change, the demand for WeatherFlow-Tempest’s services is growing rapidly. They are also committed to giving back, so they provide their data pro bono to national met agencies and climate scientists around the globe to help them save lives and plan responsibly for future generations.</p>

          <p>I’m so impressed with WeatherFlow-Tempest’s commitment to innovation and their dedication to helping their customers and our planet. I highly recommend checking them out, they also have a <b>Forecaster Blog.</b> </p>
          
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

export default Tempest;
