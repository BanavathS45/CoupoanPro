import React from "react";
import RoutingFile from "../singles/RoutingFile";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Delcutter = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  let Weburl = "https://joybos.com/collections/trash-can?ref=OOQODS8oOV5Gc";
  const gardening = [
    {
      id: 1,
      image: "../Images/Blog/Joybos_Bath-1.webp",
      heading: "Bathroom Products",
      title: "Advantages of Bathroom Products",
      advantages: [
        {
          listItem:
            "Towel racks: Joybos towel racks are available in a variety of styles and finishes to match your bathroom décor. They are also made from durable materials that can withstand everyday use.",
        },

        {
          listItem:
            "Toothbrush holders: Joybos toothbrush holders are available in both wall-mounted and countertop models. They are also designed to be easy to clean and maintain.",
        },

        {
          listItem:
            "Soap dishes: Joybos soap dishes are available in a variety of materials, including ceramic, glass, and stainless steel. They are also designed to drain properly to prevent soap scum from building up.",
        },
        {
          listItem:
            "Shower caddies: Joybos shower caddies are a great way to keep your shower essentials organized and within reach. They are available in a variety of sizes and styles to fit any shower stall.",
        },
        {
          listItem:
            "Toilet brushes: Joybos toilet brushes are made from durable materials and feature non-slip handles for easy cleaning. They also come with replaceable brush heads so you can keep your toilet bowl clean and fresh.",
        },
      ],
      useges: [
        {
          listUse: "Organize the vanities and counters in your bathrooms..",
        },

        {
          listUse: "Store toiletries and cosmetics in a neat and tidy way.",
        },

        {
          listUse:
            "Save space by utilizing your storage capacity effectively.",
        },
        {
          listUse: "Make your bathroom seem cozier and more welcoming.",
        },
      ],
    },
    {
      id: 2,
      image: "../Images/Blog/Kitchen.webp",
      heading: "Kitchen Products",
      title:
        "Advantages of Kitchen Products:",
      advantages: [
        {
          listItem:
            "Utensil organizers: Your cooking utensils can be kept accessible and organized with Joybos utensil organizers. There is a range of sizes and styles available for selection.",
        },

        {
          listItem:
            "Dish racks: Dish racks from Joybos are an excellent way to arrange your dishes and dry cups. They are simple to clean and composed of sturdy materials. ",
        },

        {
          listItem:
            "Pantry organizers: Keeping your food organized and making the most of your pantry space are two excellent uses for Joybos pantry organizers. There is a range of sizes and styles available for selection.",
        },
      ],
      useges: [
        {
          listUse: "Store food and cookware safely and conveniently",
        },

        {
          listUse: "Food storage and utensil organization are made easier in your kitchen with the help of kitchen products.",
        },

        {
          listUse:
            "Kitchen products are useful in improving your food safety by providing a hygienic, secure area for food preparation and storage.",
        },
       
      ],
    },
    {
      id: 3,
      image: "../Images/Blog/Mops.webp",
      heading: "Cleaning Products",
      title:
        "Advantages of Cleaning Products:",
      advantages: [
        {
          listItem:
            "All-purpose cleaner: Various surfaces, such as floors, countertops, and appliances, can be cleaned with the help of Joybos all-purpose cleanser.",
        },

        {
          listItem:
            "Glass cleaner: You may safely use Joybos glass cleaner on any kind of glass surface because it leaves no streaks. Additionally, it is simple to use and leaves your mirrors and windows immaculate.",
        },

        {
          listItem:
            "Bathroom cleaner: Strong enough to eliminate hard water stains, soap scum, and other bathroom buildup is Joybos bathroom cleaner. In addition, it is safe to use on any kind of bathroom surface.",
        },
        {
          listItem:
            "Kitchen cleaner: Grease, dirt, and food residue are all successfully removed by Joybos kitchen cleaner thanks to its potent cleaning abilities. It can also be used safely on any type of kitchen surface.",
        },
        {
          listItem:
            "Floor cleaner: Wood, tile, and linoleum floors may all be effectively cleaned with the Joybos all-purpose floor cleaner.",
        },
      ],
      useges: [
        {
          listUse: "Ensure your house is hygienic and clean.",
        },

        {
          listUse: "It helps in removing dirt, grime, and stains from surfaces easily.",
        },

        {
          listUse:
            "With cleaning products, you can prevent harmful bacteria and germs from entering your home.",
        },
        
      ],
    },
    {
      id: 4,
      image: "../Images/Blog/Storage.webp",
      heading: "Storage & Organization Products",
      title:
        "Advantages of Storage & Organization Products:",
      advantages: [
        {
          listItem:
            "Storage bins and baskets: Joybos storage baskets and bins are useful for storing a range of goods and are reasonably priced.",
        },

        {
          listItem:
            "Shelves and racks: Joybos shelves and racks let you make the most of your storage space and maintain your belongings organized.",
        },

        {
          listItem:
            "Closet organization systems: You can maintain your clothes, shoes, and accessories neat and orderly with the aid of Joybos closet organization systems.",
        },
        {
          listItem:
            "Laundry organizers: Joybos laundry organizers can help you to keep your laundry room organized and efficient.",
        },
        {
          listItem:
            "Home storage hooks: Joybos home storage hooks work great for hanging bags, hats, coats, and other accessories.",
        },
      ],
      useges: [
        {
          listUse: "Maintain your belongings neat and orderly.",
        },

        {
          listUse: "Reduce the junk and make your home more visually appealing by organizing your house.",
        },

        {
          listUse:
            "Finding what you need when you need it will be simpler if you keep your belongings organized.",
        },
        
      ],
    },
    {
      id: 5,
      image: "../Images/Blog/Joybos_Trash.jpg",
      heading: "Trash Can Products",
      title:
        "Advantages of Trash Can Products:",
      advantages: [
        {
          listItem:
            "Recycling bins: Recycling may be made simple and convenient with the help of Joybos recycling containers.",
        },

        {
          listItem:
            "Slim trash cans: Joybos tiny trash cans are a fantastic choice for usage beneath the counter or in small locations. ",
        },

        {
          listItem:
            "Step-on trash cans: Step-on garbage cans from Joybos are an excellent way to maintain a hygienic and clean trash can.",
        },
        {
          listItem:
            "Compost bins: Composting kitchen leftovers and minimizing food waste can be accomplished using Joybos compost containers.",
        },
        {
          listItem:
            "Touchless trash cans: Trash cans with Joybos touchless lids are a practical solution to get rid of waste without ever touching the lid.",
        },
      ],
      useges: [
        {
          listUse: "It makes the process of disposing of trash and recyclables easier.",
        },

        {
          listUse: "Reduce the impact on the environment by using recycled materials.",
        },

        {
          listUse:
            "Keep smells and waste contained to maintain a clean and organized house.",
        },
      
      ],
    },
  ];

  return (
    <div>
      <RoutingFile />
      <div className="mainContent">
        {/* <!-- Main Content --> */}
        <section>
          {/* <!--Declutter Section  --> */}
          <div class="top_img">
            <h1 id="up">
              Declutter and Conquer Chaos 5{" "}
              <a href={Weburl} target="_blank" title="Go to Website">
                Joybos{" "}
              </a>
              Home Organization and Storage Solutions
            </h1>
            <div class="blog-img1">
              <img src="/Images/Blog/joybos_main.jpeg" alt="" width="30%" />
            </div>
            <p className="mt-3 mb-3">
              A well-organized home is a happy home. When everything has a
              place, it’s easier to find what you need and keep your space clean
              and tidy. But with so many different products on the market, it
              can be tough to know where to start.
            </p>

            <p>
              <b>Joybos</b> is a one-stop home organization and storage
              solutions brand that provides an extensive range of items to
              assist you in maintaining a clean and organized house. From
              stackable storage bins to foldable shelves to bathroom
              accessories, Joybos has everything you need to create a more
              efficient and functional space.
            </p>
          </div>
        </section>
        {/* <!-- Delccutter More Information (js) --> */}
        <section id="blog">
          <div className="blog-details">
            <div className="blog_Ad">
              {gardening.map((item, index) => {
                return (
                  <div key={index} item={item} data-aos="flip-right" className="mt-5">
                    <h1 className="text-center maintext">
                      <Link to={Weburl} title="Goto Website" target="_blank">
                        {item.heading}
                      </Link> 
                    </h1>

                    <div class="blog-box " id="blog-box">
                      <div class="blog-img w-100">
                        <img src={item.image} alt={item.heading} />
                      </div>
                      <div class="blog-details">
                        <h4>Advantages</h4>
                        {item.advantages.map((adv) => {
                          return <li>{adv.listItem}</li>;
                        })}
                      </div>
                    </div>
                    <h4>{item.title}</h4>
                    {item.useges.map((uses) => {
                      return <li>{uses.listUse}</li>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="Benefits">
          {/* <!-- Benefits_1 --> */}
          <div class="Benefits">
            <h2>Benefits of Joybos Products</h2>
            <ul>
              <li>
                <b>Durability:</b> Products from Joybos are built to last
                because they are composed of premium materials.
              </li>
              <li>
                <b>Functionality: </b> Joybos products are designed to be both
                functional and stylish. They will also support you in fully
                utilizing your storage space and maintain a clean, organized
                home.
              </li>
              <li>
                <b>Affordability:</b> Their goods offer excellent value for the
                money and are reasonably priced.
              </li>
            </ul>
          </div>
          {/* <!-- Benefits_2 --> */}
          <div class="BeUseful">
            <h2>How They Can Be Useful</h2>
            <ul>
              <li>To keep your kitchen neat and practical, use organizers.</li>
              <li>
                To hang coats, hats, and other items use home storage hooks.
              </li>
              <li>
                To keep your garage organized and tidy use garage storage
                solutions.
              </li>
              <li>
                To keep your laundry room organized and efficient use laundry
                organizers.
              </li>
              <li>
                To keep your bathroom organized, clean and stylish use bathroom
                accessories.
              </li>
              <li>
                Store bulkier goods like tools, kitchen appliances, and books on
                shelves and racks.
              </li>
              <li>
                To maintain your shoes, accessories, and clothing in order, use
                closet organization systems.
              </li>
              <li>
                To store smaller goods like clothes, toys, and cleaning
                supplies, use storage boxes and baskets.
              </li>
            </ul>
          </div>
        </section>
        {/* ---------home(gotop)------------------ */}
        <a href="#up" title="Go Top" id="home">
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </a>

        {/* <!-- Copon Button --> */}
        <button className="normal" id="normal">
          <a
            href="https://joybos.com/collections/trash-can?ref=OOQODS8oOV5Gc"
            target="_blank"
          >
            Get Coupon Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Delcutter;
