import React from "react";
import RoutingFile from "./RoutingFile";
import CoupanCode from "../CoupanCode";
const Joybos = () => {
  // Title
  const title = "Joybosds";
  const contery = ["Garmany", "France", "Japan"];
  const data = [
    {
      weblink: "Shelves and racks",
      weburl:
        "https://joybos.com/search?options%5Bprefix%5D=last&options%5Bunavailable_products%5D=last&q=Shelves%20and%20racks&ref=OOQODS8oOV5Gc&type=product",
    },
    {
      weblink: "Kitchen organizers",
      weburl: "https://joybos.com/collections/kitchen?ref=OOQODS8oOV5Gc",
    },
    {
      weblink: "Laundry organizers",
      weburl:
        "https://joybos.com/search?options%5Bprefix%5D=last&options%5Bunavailable_products%5D=last&q=Laundry&ref=OOQODS8oOV5Gc&type=product",
    },
    {
      weblink: "Home storage hooks",
      weburl:
        "https://joybos.com/search?options%5Bprefix%5D=last&options%5Bunavailable_products%5D=last&q=Home%20storage%20hooks&ref=OOQODS8oOV5Gc&type=product",
    },
    {
      weblink: "Bathroom accessories",
      weburl: "https://joybos.com/collections/bath?ref=OOQODS8oOV5Gc",
    },
    {
      weblink: "Cleaning Products",
      weburl: "https://joybos.com/collections/cleaning?ref=OOQODS8oOV5Gc",
    },
    {
      weblink: "Storage bins and baskets",
      weburl:
        "https://joybos.com/collections/storage-organization?ref=OOQODS8oOV5Gc",
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
                <b>About:</b>Joybos is a home organization and storage brand
                that offers a wide range of products to help you keep your home
                tidy and organized. From stackable storage bins to foldable
                shelves to bathroom accessories, Joybos has everything you need
                to create a more efficient and functional space. Joybos offers a
                wide variety of products to choose from, including:
              </p>
              {/*
          <!-- para_1 --> */}
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
        </div>

<div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-12 col-sm-12" >
 {/*
    <!-- Coupon Code --> */}

<CoupanCode
          title={title}
          refCodeUrl={"https://www.youtube.com/watch?v=Auo9tuHteGQ"}
          websiteUrl={"https://joybos.com/?ref=OOQODS8oOV5Gc"}
          copytype={"Summer"}
          percentageTag={`Get 12% off on all products.`}
        />
    </div>
    <div className=" col-lg-6 col-md-12 col-sm-12" >
        {/* Coupon Code_2 */}
        <CoupanCode
          title={title}
          refCodeUrl={"https://www.instagram.com "}
          websiteUrl={"https://de.joybos.com/?ref=OOQODS8oOV5Gc"}
          contery={contery[0]}
          copytype={" Welcome" + 10}
          percentageTag={`Get 12% off on all products in ${contery[0]}`}
        />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12" >
       {/* Coupon Code_3 */}
       <CoupanCode
          title={title}
          refCodeUrl={"https://www.google.com "}
          websiteUrl={"https://joybos.fr/?ref=OOQODS8oOV5Gc"}
          contery={contery[1]}
          copytype={"Save" + 50}
          percentageTag={`Get 12% off on all products in ${contery[1]}`}
        />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12" >
       
        {/* Coupon Code_4 */}
        <CoupanCode
          title={title}
          refCodeUrl={"https://www.facebook.com "}
          websiteUrl={"https://jp.joybos.com/?ref=OOQODS8oOV5Gc"}
          contery={contery[2]}
          copytype={"Save" + 50}
          percentageTag={`Get 12% off on all products in ${contery[2]} `}
        />
    </div>

  </div>
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

export default Joybos;
