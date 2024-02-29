import React from "react";
import { Link, NavLink } from "react-router-dom";
const RoutingFile = () => {
  // const nav = document.getElementById("navbar");
  // const close1 = document.getElementById("close");
  // if (bar) {
  //   bar.addEventListener("", () => {
  //     nav.classList.add("active")
  //   })
  // }
  // if (close1) {
  //   close1.addEventListener("click", () => {
  //     nav.classList.remove("active")
  //   })
  // }
  const handleBar = () => {
    const nav = document.getElementById("navbar");
    const bar = document.getElementById("bar");
    if (bar) {
      nav.classList.add("active");
    }
  };
  const handleCancel = () => {
    const close1 = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (close1) {
      nav.classList.remove("active");
    }
  };

  return (
    <div>
      <div>
        <section id="header">
          {/* <!-- logo Section --> */}
          <Link to="/">
            <img
              class="logo"
              src="../Images/Home/couponsgopro-logo.png"
              alt="logo"
            />
          </Link>

          {/*<!-- Nav Bar Section --> */}
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/store">AllStore</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>

            {/*<!-- Cancel Button --> */}
            <Link href="" id="close">
              <i class="fa fa-times" onClick={handleCancel}></i>
            </Link>
          </ul>
          {/*
  <!-- Mobile Version --> */}
          <div id="mobile">
            <i id="bar" class="fa fa-bars" title="Menu" onClick={handleBar}></i>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoutingFile;
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
// "homepage": "https://BanavathS45.github.io/CouponGoPro",