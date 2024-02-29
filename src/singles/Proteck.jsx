import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Proteck = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://www.proteckd.com/?ref=NaTiHvIWX2o4f";
// Title
const title = "Proteck’d Apparel";

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
            <b>About:</b> Proteck’d is a company that is committed to protecting people from the harmful effects of electromagnetic fields (EMFs). They offer a wide range of EMF protection apparel, including hoodies, shirts, pants, and hats. Proteck’d apparel is made with high-quality materials and is designed to block EMFs from all sources, including cell phones, computers, and Wi-Fi routers. Their apparel is also stylish and comfortable, so you can wear it all day long without sacrificing your personal style. Proteck’d is committed to providing its customers with the best possible EMF protection. They offer a satisfaction guarantee on all of their products, and they are always working to develop new and innovative ways to protect people from EMFs.


          </p>
          <p>If you are looking for a way to protect yourself from the harmful effects of EMFs, Proteck’d is the perfect choice for you.</p>
        
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

export default Proteck;
