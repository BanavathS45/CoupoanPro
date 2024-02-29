import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const TesGo = () => {
  // Copy ref Code
  const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
  // Redirect Website Link
  const websiteUrl = "https://www.tesgobike.ca/?ref=dPJHcAeaV4HfI ";
  // Title
  const title = "TesgoCA";

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
                <b>About:</b> Tesgo Bikes is a Canadian company that is
                passionate about providing its customers with the best possible
                electric bike experience. They offer a wide variety of electric
                bikes to choose from, so you can find the perfect one for your
                needs and budget. Tesgo Bikes is committed to quality and
                innovation. Their bikes are made with high-quality components
                and are backed by a one-year warranty. They also offer a variety
                of accessories and services to help you get the most out of your
                electric bike.
              </p>
              <p>
                Whether you are looking for a commuter bike, a mountain bike, or
                a cargo bike, Tesgo Bikes has the perfect electric bike for you.
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
              copytype={"Save" + 10}
              percentageTag={`Get $50 off on all products.`}
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

export default TesGo;
