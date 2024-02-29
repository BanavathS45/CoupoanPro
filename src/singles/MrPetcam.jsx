import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const MrPetcam = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "= https://www.mrpetcam.com/?ref=X5Yv12Dw9WIdy";
// Title
const title = "Mr. Petcam";

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
            <b>About:</b> Luxe Pickle Ball is a website that sells pickleball paddles and pickleballs with unique and cute designs. The website is owned by a family who loves playing pickleball and wanted to create paddles that match their aesthetic. They also offer custom paddles for orders of 20 or more. The website has a Blog section where they share tips and news about pickleball.Mr. Petcam is the world’s first and most popular point-of-view pet camera. It clips onto your pet’s collar and captures video and audio directly from their perspective. This means that you can finally see what your pet gets up to when you’re not around. Are they exploring the backyard? Playing with their friends? Or just relaxing in the sun? With Mr. Petcam, you’ll never have to wonder again. It is also a great way to bond with your pet as watching their videos can help you to understand them better and learn about their world. It’s also just a lot of fun to see what they see and hear.


          </p>
        
        </div>
        <ul className="text-white">
          <h6>
          Some of the pet cam features are:
          </h6>
          <li>Wide FOV</li>
          <li>Night Vision</li>
          <li>Motion Detection</li>
          <li>Expandable Memory</li>
          <li>Full 1080p HD Video</li>
          <li>​Lightweight and Compact</li>
          <li>Waterproof Casing for Dogs</li>
        </ul>
      </section>
      {/*
      <!-- Coupon Code --> */}
      <section class="w-100">
        <CoupanCode 
        title={title} 
        refCodeUrl={clipCopy} 
        websiteUrl={websiteUrl} 
        copytype={"Save" + 10}
        percentageTag={`Get 15% off on all products.`}
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

export default MrPetcam;
