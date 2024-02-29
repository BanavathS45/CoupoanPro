import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Tattooing = () => {
  // Copy ref Code
  const clipCopy = "https://www.youtube.com/watch?v=Auo9tuHteGQ";
  // Redirect Website Link
  const websiteUrl =
    "https://uvlizer.co/?ref=k-n1xbW9smsZa&utm_source=affiliate";
  // Title
  const title = "Uvlizer";

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
          <b> The Home Disinfection System That Will Keep Your Family Safe</b>
        </p>
        {/*
    <!-- side Text --> */}
        <div id="single-page">
          <section class="text_pra">
            <div class="top_img">
              {/*
          <!-- para_1 --> */}
              <p>
                <b>About:</b> Uvlizer is a company that provides innovative home
                disinfection solutions. Their flagship product, the Uvlizer
                UVO254™ Powered Home Disinfection Tower, is the only home
                disinfection device that uses UVO254™ bulbs to disinfect
                surfaces and air from top to bottom, including the most
                hard-to-reach areas. Uvlizer is the perfect solution for
                families who want to protect themselves from harmful germs and
                bacteria. It is also a great choice for people with allergies or
                sensitivities to chemicals.
              </p>
              <ul className="text-white">
                <h6>Here are just a few of the benefits of using Uvlizer:</h6>
                <li> Chemical-free</li>
                <li> Safe and easy to use</li>
                <li>Portable and lightweight</li>
                <li>Kills 99.9% of germs and bacteria</li>
                <li>Disinfects surfaces and air from top to bottom</li>
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

export default Tattooing;
