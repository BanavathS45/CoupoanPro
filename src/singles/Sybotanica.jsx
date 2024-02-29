import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Sybotanica = () => {
    // Copy ref Code
const clipCopy = "https://www.facebook.com";
// Redirect Website Link
const websiteUrl ="https://www.sybotanica.com/?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro ";
  // Title
  const title = "SYBotanicA";
  const data = [
    {
      weblink: "Premium soil mixes",
      weburl:
        "https://www.sybotanica.co.uk/collections/kokos-potgrond-kopen?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Soil improvers",
      weburl:
        "https://www.sybotanica.co.uk/collections/soil-improvers-for-houseplants?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Plant pots",
      weburl:
        "https://www.sybotanica.co.uk/collections/kweekpotjes-kopen?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Sphagnum Moss",
      weburl:
        "https://www.sybotanica.co.uk/collections/sphagnum-moss?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Live Moss",
      weburl:
        "https://www.sybotanica.co.uk/collections/levend-mos-kopen?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Houseplant Fertilizer",
      weburl:
        "https://www.sybotanica.co.uk/collections/houseplant-fertilizer?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
    {
      weblink: "Moss poles",
      weburl:
        "https://www.sybotanica.co.uk/collections/moss-poles?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro",
    },
  
  ];
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
                <b>About:</b> SYBotanicA is your one-stop shop for all your plant care needs, regardless of skill level. With their wide selection of premium soil mixes, components, plant pots, moss, sphagnum moss, live moss, houseplant fertilizer, and moss poles, Sybotanica provides everything you need to create a flourishing indoor oasis.
              </p>
          
              <ul>
              <h6 className="text-white">The store sells a wide range of products essential for Plant Lovers:</h6>
                {data.map((item) => {
                  return (
                    <div className="list-item">
                      <li>
                        <a href={item.weburl} target="_blank">
                          {item.weblink}
                        </a>
                      </li>
                    </div>
                  );
                })}
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
          copytype={"Save"+10}
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
    //</div>
  );
};

export default Sybotanica;
