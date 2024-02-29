import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const RYZE = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://www.ryzesuperfoods.com/?ref=OHEi_K0rWFVJ ";
// Title
const title = "RYZE Superfoods";

return (
<div>
  {/* Header and NavBar */}
  <RoutingFile />
  {/*
  <!-- Main Heading --> */}
  <div className="mainContent pt-5">
    <h1 class="up">{title}</h1>
    <p className="text-center"> <b>Your New Morning Ritual for Success</b></p>
    {/*
    <!-- side Text --> */}
    <div id="single-page">
      <section class="text_pra">
        <div class="top_img">
          {/*
          <!-- para_1 --> */}
          <p>
            <b>About:</b> RYZE is a company that is dedicated to helping people feel their best every day. They offer a variety of products, including medicinal mushroom coffee, adaptogenic teas, and collagen peptides, that are designed to support overall health and well-being. RYZE was founded by Andrée and Rashad, two former Harvard undergrads who were looking for a way to improve their own energy and focus. After experimenting with different medicinal mushrooms and adaptogenic herbs, they landed on a daily ritual that made them feel their best. Today, RYZE is on a mission to help others achieve their own personal and professional goals by providing them with the tools and resources they need to start their day off right.


          </p>
          
        </div>
        <ul className="text-white">
          <h6>
          Here are just a few of the benefits of using RYZE products:
          </h6>
          <li>Stronger immune system</li>
          <li>Reduced stress and anxiety</li>
          <li>Increased energy and focus</li>
          <li>Improved mood and mental clarity</li>
          <li>Enhanced physical and cognitive performance</li>
       
        </ul>
        
      </section>
      {/*
      <!-- Coupon Code --> */}
      <section class="w-100">
        <CoupanCode 
        title={title} 
        refCodeUrl={clipCopy} 
        websiteUrl={websiteUrl} 
        copytype={"Save" + 25}
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

export default RYZE;
