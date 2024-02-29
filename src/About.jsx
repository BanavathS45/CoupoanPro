import React from "react";
import RoutingFile from "./singles/RoutingFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div>
      {/* --------Header and Navbar----------- */}
      <RoutingFile />
      {/* <!-- Main Content Section --> */}
      <div className="mainContent">
        <section id="hero-page" class="about-header">
          <h2 id="up">#KnowUs</h2>
        </section>
        {/* -----------main Content-------------- */}
        <section id="about">
          <div class="about-box container">
            <div className="row">
              {/*-----------about-details_1------------  */}
              <div className="mt-4 col-lg-6 col-md-12 col-sm-12">
                <div class="about-details bg-primary">
                  <h3>We are CouponsGoPro</h3>
                  <p>
                    Coupons Go Pro is a coupon code website that helps users
                    find and use various shopping offers. Our website features a
                    wide range of brands and products, and we provide exclusive
                    coupon codes to help you save money on your purchases.
                  </p>
                </div>
              </div>
              {/*-----------about-details_2------------  */}
              <div className="mt-4 col-lg-6 col-md-12 col-sm-12">
                <div class="about-details  bg-danger">
                  <h3 style={{ background: "#dc3545" }}>
                    Find the Best Shopping Deals
                  </h3>
                  <p>
                    Discover the latest discounts and promotions from your
                    favorite brands. Our website offers the best shopping deals
                    to help you save money on your purchases. Our website is
                    dedicated to providing you with the best shopping deals. Use
                    our search bar to find your favorite brands and products,
                    and enjoy exclusive coupon codes and discounts. Start saving
                    today!
                  </p>
                </div>
              </div>
              {/*-----------about-details_3------------  */}
              <div className="mt-4 col-lg-6 col-md-12 col-sm-12">
                <div class="about-details bg-info">
                  <h3 style={{ background: "#0dcaf0" }}>
                    Explore Brands and Coupons
                  </h3>
                  <p>
                    Browse through our extensive list of brands and find the
                    latest coupons and deals. Each brand card features a
                    description, coupon code, and a button to visit their
                    website. Don’t miss out on the best shopping offers.
                  </p>
                </div>
              </div>
              {/*-----------about-details_4------------  */}
              <div class="mt-4 col-lg-6 col-md-12 col-sm-12 ">
                <div class="about-details  bg-success">
                  <h3 style={{ background: "#198754" }}>Our Principles</h3>
                  <div class="ur_D">
                    <div>
                      <h5 style={{ background: "#198754" }}>
                        Wide Range of Brands
                      </h5>
                      <p>
                        Discover discounts and offers from a diverse selection
                        of brands. Find the best deals on your favorite
                        products.
                      </p>
                    </div>
                    <div>
                      <h5 style={{ background: "#198754" }}>
                        Verified and Reliable Coupons
                      </h5>
                      <p>
                        Rest assured that all our coupon codes are verified and
                        up-to-date. Shop confidently knowing you’re getting the
                        best savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------home(up button)----------- */}
      <a href="#up" title="Go Top" id="home">
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </a>
    </div>
  );
};

export default About;
