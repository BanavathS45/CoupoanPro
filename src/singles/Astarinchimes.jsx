import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Astarinchimes = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://astarinchimes.com/?ref=cKi-1man9hHJf";
// Title
const title = "Astarin Chimes";

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
            <b>About:</b>Astarin Chimes has been dedicated to pursuing the
            most beautiful voice in the world for many years. Their wind
            chimes are individually hand-tuned for musical perfection, and
            each one creates a unique melody that can change with your mood.
            Whether you are feeling sad, happy, or nostalgic, Astarin Chimes
            will create a soundscape that perfectly matches your emotions.
            They are the perfect way to add a touch of beauty and harmony to
            your home or garden.
          </p>
          {/*
          <!-- para_1 --> */}
          <p>
            If you are looking for a way to relax and de-stress, or simply
            add a touch of beauty to your home, Astarin Chimes are the
            perfect choice.
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
        percentageTag={`Get 10% off on all products.`} />
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

export default Astarinchimes;