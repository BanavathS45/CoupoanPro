import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Guduchi = () => {
  // Copy ref Code
  const clipCopy = "https://www.facebook.com";
  // Redirect Website Link
  const websiteUrl = "https://guduchiayurveda.com/?ref=GAN5yXUEjtlyT";
  // Title
  const title = "Guduchi Ayurveda";
  const data = [
    {
      weblink: "Hair care",
      weburl:
        "https://guduchiayurveda.com/collections/hair-care?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Skin care",
      weburl:
        "https://guduchiayurveda.com/collections/skin-face-care?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Joint pain",
      weburl:
        "https://guduchiayurveda.com/collections/pain-management?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Weight Gain",
      weburl:
        "https://guduchiayurveda.com/collections/weight-gain?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Weight Loss",
      weburl:
        "https://guduchiayurveda.com/collections/weight-loss?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Digestive health",
      weburl:
        "https://guduchiayurveda.com/collections/digestive-care?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Health Supplements",
      weburl:
        "https://guduchiayurveda.com/collections/health-supplements?ref=GAN5yXUEjtlyT",
    },
    {
      weblink: "Immune system support",
      weburl:
        "https://guduchiayurveda.com/collections/immunity-booster?ref=GAN5yXUEjtlyT",
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
                <b>About:</b>Guduchi The Ayurvedism has been founded with an
                objective to deliver the finest quality Ayurveda products
                (Medicines and Cosmetics), build trust about the effectiveness
                and safety of Ayurvedic medicines, and encourage the usage of
                more natural medicines that are native to our body.
              </p>
              {/*
          <!-- para_1 --> */}
              <p>
                The store sells a wide range of Ayurvedic products, including
                products for the following health conditions:
              </p>
              <ul>
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
          <section className="w-100">
            <CoupanCode
              title={title}
              refCodeUrl={clipCopy}
              websiteUrl={websiteUrl}
              copytype={"Save" + 20}
              percentageTag={`Get 11% off on all products.`}
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

export default Guduchi;
