import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Yose = () => {
  // Copy ref Code
  const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
  // Redirect Website Link
  const websiteUrl = "https://yosepower.com/?ref=12j2mHwKi_1WR";
  // Title
  const title = "Yose Power";

  return (
    <div>
      {/* Header and NavBar */}
      <RoutingFile />
      {/*
  <!-- Main Heading --> */}
      <div className="mainContent pt-5">
        <h1 class="up">{title}</h1>
        <p className="text-center">
          {" "}
          <b> Your One-Stop Shop for Electric Bikes and Accessories</b>
        </p>
        {/*
    <!-- side Text --> */}
        <div id="single-page">
          <section class="text_pra">
            <div class="top_img">
              {/*
          <!-- para_1 --> */}
              <p>
                <b>About:</b> Yose Power is a professional manufacturer of
                electric bikes and accessories, with over 11 years of experience
                in the industry. They are committed to providing their customers
                with the highest quality products and services, and to promoting
                low-carbon travel and environmental protection. Their electric
                bikes are made with high-quality components and are backed by a
                one-year warranty. They offer a wide variety of bikes to choose
                from, including commuter bikes, mountain bikes, and cargo bikes,
                so you can find the perfect bike for your needs.
              </p>
              <p>
                They also offers a variety of accessories to help you get the
                most out of your electric bike, such as batteries, conversion
                kits, and helmets. They also offer a variety of services, such
                as battery repair and replacement. If you are looking for a way
                to reduce your carbon footprint and get around in a more
                environmentally friendly way, a Yose Power electric bike is the
                perfect choice for you.
              </p>
              <ul className="text-white">
                <h6>
                  Here are just a few of the benefits of choosing a Yose Power
                  electric bike:
                </h6>
                <li>Improves air quality</li>
                <li>Saves money on gas</li>
                <li>Is fun and easy to ride</li>
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
              copytype={"Save" + 15}
              percentageTag={`Get €10 off on all products except E-Bike Accessories and E-Bike Chargers.`}
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

export default Yose;
