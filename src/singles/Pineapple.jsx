import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Pineapple = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://pineapple-island.com/?ref=b1LOg9GydjCMO";
// Title
const title = "Pineapple Island";

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
            <b>About:</b> Pineapple Island is a jewelry and accessories brand that is passionate about affordable wanderlust. Every piece of Pineapple Island jewelry is handmade by skilled artisans in Bali and the UK so with every product made, we enable sustainable job creation for our makers. The brand is committed to cutting out big factories and getting money directly into the hands of smart and resourceful artisans. Pineapple Island jewelry is designed to be stylish, affordable, and perfect for everyday adventures. The brand’s mantra is quality, style, and the spirit of exploration.


          </p>
          <p>Pineapple Island is more than just a brand it’s a mindset. It’s a reminder that life’s most extraordinary moments happen when you step outside your comfort zone. It’s an invitation to embrace the unknown, to weave your own story, and to wear it proudly. Every piece of Pineapple Island jewelry is a keepsake from your journey, a declaration that life’s greatest adventure is the one you create for yourself. So if you are a fellow adventurer then join then in celebrating the freedom within.</p>
        
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

export default Pineapple;
