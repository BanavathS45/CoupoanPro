import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const PyroFarms = () => {
// Copy ref Code
const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
// Redirect Website Link
const websiteUrl = "https://pyrofarms.com/?ref=BdkW_mXetOO7V";
// Title
const title = "PyroFarms";

return (
<div>
  {/* Header and NavBar */}
  <RoutingFile />
  {/*
  <!-- Main Heading --> */}
  <div className="mainContent pt-5">
    <h1 class="up">{title}</h1>
    <p className="text-center"> <b> Bring the Beauty and Glow of Nature into Your Home with Bioluminescent Phytoplankton</b></p>
    {/*
    <!-- side Text --> */}
    <div id="single-page">
      <section class="text_pra">
        <div class="top_img">
          {/*
          <!-- para_1 --> */}
          <p>
            <b>About:</b> PyroFarms is a company that is dedicated to bringing the beauty and glow of nature into the home, office, and classroom through their bioluminescent phytoplankton, PyroDinos. PyroDinos are tiny plant-plankton that produce a brilliant blue light at night. They are also a major source of oxygen in our oceans. PyroFarms offers a complete system to grow PyroDinos at home, the Bioluminescent Bio-Orb. The Bio-Orb is a glass sphere with a flat bottom and a specially designed stopper to allow air exchange but prevent excessive evaporation. It provides the ideal environment for growing PyroDinos.


          </p>
          
        </div>
        <ul className="text-white">
          <h6>
          Here are just a few of the benefits of growing PyroDinos:
          </h6>
          <li> <b>Beautiful and glowing:</b> PyroDinos produce a brilliant blue light at night, creating a mesmerizing and calming atmosphere.</li>
          <li><b>Educational:</b> PyroDinos are a great way to teach children about the importance of phytoplankton and their role in the environment.</li>
          <li><b>Beneficial for the environment: </b> PyroDinos remove the greenhouse gas CO2 from your environment, helping to fight climate change.</li>
       
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

export default PyroFarms;
