import React from "react";
import { Link } from "react-router-dom";
import RoutingFile from "../singles/RoutingFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const gardening = [
  {
    id: 1,
    image: "../Images/Blog/Premium-Soil-Mixes-1.jpg",
    heading: "1. Premium Soil Mixes",
    title:
      "The foundation of any healthy plant is a well-draining and nutrient-rich soil mix. SYBotanicA offers a selection of high-quality soil combinations that are tailored to meet the specific needs of various plant species, such as orchids, cactus, and succulents. Their soil mixtures are made with premium components to give your plants the best possible growing conditions.",
    advantages: [
      {
        listItem:
          "Tailored to specific plant needs: SYBotanica’s premium soil mixes are formulated to provide the optimal growing environment for different types of plants.",
      },

      {
        listItem:
          "Nutrient-rich: Their soil mixes are packed with essential nutrients to promote healthy plant growth. ",
      },

      {
        listItem:
          "Well-draining: SYBotanica’s soil mixes are designed to drain well, preventing waterlogging and root rot.",
      },
    ],
    useges: [
      {
        listUse: "Choose the right soil mix for your plant type.",
      },

      {
        listUse: "Fill your plant pot with the soil mix.",
      },

      {
        listUse:
          "Gently plant your plant in the pot, making sure the roots are well-covered.",
      },
      {
        listUse: "Water your plant thoroughly.",
      },
    ],
  },
  {
    id: 2,
    image: "../Images/Blog/make-your-own-soil-potting-mix-1.jpg",
    heading: "2. Components for DIY Soil Mixes",
    title:
      "If you prefer to create your own soil mixes, SYBotanicA offers a range of individual components, including perlite, vermiculite, and coco coir. These elements ensure that your plants get the assistance they need for healthy growth by enhancing soil drainage, aeration, and water retention.",
    advantages: [
      {
        listItem:
          "Flexibility: Create customized soil mixes tailored to your plant’s specific needs.",
      },

      {
        listItem:
          "Control over ingredients: Select high-quality components to ensure the best possible growing environment for your plants. ",
      },

      {
        listItem:
          "Cost-effective: Mixing your own soil can be more affordable than purchasing pre-mixed soils.",
      },
    ],
    useges: [
      {
        listUse:
          "Research the appropriate proportions of each component for your plant species.",
      },

      {
        listUse: "Mix the components thoroughly in a clean container.",
      },

      {
        listUse:
          "Follow the same planting instructions as for premium soil mixes.",
      },
    ],
  },
  {
    id: 3,
    image: "../Images/Blog/pots.webp",
    heading: "3. Plant Pots",
    title:
      "The health of your plants greatly depends on the type of pot you use. In addition to terracotta, ceramic, and plastic plant pots, SYBotanicA offers a large selection of plant pots in various designs and materials. Their planters are made to guarantee good drainage and root development while also enhancing the visual appeal of your plants.",
    advantages: [
      {
        listItem:
          "Aesthetic appeal: Choose pots that complement your plants and enhance your décor.",
      },

      {
        listItem:
          "Proper drainage: Select pots with drainage holes to prevent waterlogging.",
      },

      {
        listItem:
          "Material options: Choose from various materials, such as terracotta, ceramic, or plastic, each with its own benefits.",
      },
    ],
    useges: [
      {
        listUse:
          "Select a pot with drainage holes that is slightly larger than the plant’s root ball.",
      },

      {
        listUse: "Fill the pot with the appropriate soil mix.",
      },

      {
        listUse:
          "Gently plant your plant in the pot, ensuring the roots are properly covered by the soil.",
      },
      {
        listUse:
          "Water your plant thoroughly until water runs out of the drainage holes.",
      },
    ],
  },
  {
    id: 4,
    image: "../Images/Blog/Sphagnummoss.webp",
    heading: "4. Sphagnum Moss",
    title:
      "Essential materials for building specialist vivariums and terrariums are moss and sphagnum moss. SYBotanicA sells a range of moss and sphagnum moss products that are well-known for their capacity to hold onto moisture and produce an atmosphere that is humid and perfect for specific plant species.",
    advantages: [
      {
        listItem:
          "Humidity retention: Moss and sphagnum moss help maintain a humid environment ideal for certain plant species.",
      },

      {
        listItem:
          "Aeration: Moss and sphagnum moss promote air circulation around plant roots, preventing root rot. ",
      },

      {
        listItem:
          "Decorative appeal: Moss and sphagnum moss add a touch of greenery and natural beauty to terrariums and vivariums.",
      },
    ],
    useges: [
      {
        listUse:
          "Line the bottom of your terrarium or vivarium with a layer of moss or sphagnum moss.",
      },

      {
        listUse:
          "Plant your chosen plants in the moss or sphagnum moss, ensuring their roots are properly covered.",
      },

      {
        listUse:
          "Mist your terrarium or vivarium regularly to maintain humidity.",
      },
    ],
  },
  {
    id: 5,
    image: "../Images/Blog/live_moss.webp",
    heading: "5. Live Moss",
    title:
      "Bring the beauty of nature indoors with SYBotanica’s collection of live moss. These alluring plants provide a little peace and greenery into every area.",
    advantages: [
      {
        listItem:
          "A touch of nature: Live moss brings the beauty of the natural world indoors.",
      },

      {
        listItem:
          "Air purification: Moss helps filter indoor air, removing harmful pollutants. ",
      },

      {
        listItem:
          "Low-maintenance care: Live moss requires minimal care, making it an easy-to-maintain addition to your home.",
      },
    ],
    useges: [
      {
        listUse:
          "Choose a suitable location for your live moss, such as a terrarium or a shaded area in your home.",
      },

      {
        listUse:
          "Provide your live moss with regular moisture by misting or placing it in a shallow tray of water.",
      },

      {
        listUse:
          "Avoid direct sunlight, as excessive exposure can damage the moss.",
      },
    ],
  },
  {
    id: 6,
    image: "../Images/Blog/fertilizers.jpg",
    heading: "6. Houseplant Fertilizer",
    title:
      "Nourish your plants with Sy Botanica’s range of houseplant fertilizers. Their mixes are made especially to supply vital nutrients for healthy plant growth and to encourage colorful foliage.",
    advantages: [
      {
        listItem:
          "Encourages healthy growth: Fertilizer for houseplants gives plants the nutrients they need to thrive and develop to their full potential.",
      },

      {
        listItem:
          "Boosts plant resistance: Fertilizer makes plants more resilient to pests and illnesses. ",
      },

      {
        listItem:
          "Encourages vibrant foliage: Fertilizer promotes healthy and vibrant plant foliage.",
      },
    ],
    useges: [
      {
        listUse:
          "Follow the instructions on the fertilizer label for the appropriate dosage and frequency of application.",
      },

      {
        listUse:
          "Dilute the fertilizer in water according to the instructions.",
      },

      {
        listUse:
          "Apply the diluted fertilizer to your plant’s soil, avoiding direct contact with the leaves or stems.",
      },
      {
        listUse: "Water your plant thoroughly after fertilization.",
      },
    ],
  },
  {
    id: 7,
    image: "../Images/Blog/CocoPole.webp",
    heading: "7. Moss Poles",
    title:
      "Plants that climb are supported by moss poles, which enables them to grow to their maximum height. To accommodate a range of plant species, Sy Botanica provides moss poles in a variety of diameters and heights.",
    advantages: [
      {
        listItem:
          "Support for climbing plants: Moss poles provide a vertical structure for climbing plants to attach to and grow upwards.",
      },

      {
        listItem:
          "Promotes natural growth: Moss poles mimic the natural environment of climbing plants, encouraging their natural growth habit.",
      },

      {
        listItem:
          "Enhances aesthetics: Moss poles add a decorative element to your indoor garden.",
      },
    ],
    useges: [
      {
        listUse:
          "Insert the moss pole into the pot of your climbing plant, ensuring it is anchored securely.",
      },

      {
        listUse: "As your plant grows, guide its stems and tendrils",
      },
    ],
  },
];
let Weburl =
  "https://www.sybotanica.com/collections/moss-poles?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro";
const GardeningExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <RoutingFile />
      <div className="mainContent">
        {/* <!-- Main Content --> */}
        <section>
          <div class="top_img">
            <h1 id="up">
              Elevate Your Indoor Gardening Experience with{" "}
              <a
                href="https://www.sybotanica.com/collections/moss-poles?ref=YWGEunAYbq_wX&utm_campaign=partners&utm_medium=affiliate&utm_source=goaffpro"
                target="_blank"
              >
                SYBotanicA’s
              </a>{" "}
              7 Incredible Products
            </h1>

            {/* <!--blog-img1  --> */}
            <div class="blog-img1">
              <img src="../Images/Home/main.jpg" alt="" width="30%" />
            </div>
            <p className="mt-3">
              To what extent do you love plants? Maybe you want to make sure
              your plants thrive since you’re new to the world of indoor
              gardening. SYBotanica is your one-stop shop for all your plant
              care needs, regardless of skill level. With their wide selection
              of premium soil mixes, components, plant pots, moss, sphagnum
              moss, live moss, houseplant fertilizer, and moss poles, SYBotanica
              provides everything you need to create a flourishing indoor oasis.
            </p>
          </div>
        </section>
        {/* <!-- Gardening Experience more Information (js) --> */}
        <section id="blog">
          <div className="blog-details">
            <div className="blog_Ad ">
              {gardening.map((item, index) => {
                return (
                  <div key={index} item={item} data-aos="flip-right">
                    <h1 className="text-center maintext">
                      {" "}
                      <Link to={Weburl} title="Goto Website" target="_blank">
                        {item.heading}
                      </Link>{" "}
                    </h1>
                    <p>{item.title}</p>
                    <div class="blog-box" id="blog-box">
                      <div class="blog-img w-100">
                        <img src={item.image} alt={item.heading} />
                      </div>
                      <div class="blog-details">
                        <h4>Advantages</h4>
                        {item.advantages.map((adv) => {
                          return <li>{adv.listItem}</li>;
                        })}

                        <h4>How to use:</h4>

                        {item.useges.map((uses) => {
                          return <li>{uses.listUse}</li>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
              <p>
                Sy Botanica is a sanctuary for plant lovers, providing a vast
                array of goods to care for and show your prized plants. In order
                to create a successful indoor garden, Sy Botanica is your
                reliable partner because of their unwavering focus to quality
                and client satisfaction. Acknowledge your passion for gardening
                and furnish your house with an abundance of greenery.
              </p>
            </div>
          </div>
        </section>
        {/* <a href="#up" title="Go Top" id='home'><i class="fa fa-home"></i></a> */}
        <a href="#up" title="Go Top" id="home">
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </a>
        <button class="normal" id="normal">
          <a href={Weburl} target="_blank">
            Get Coupon Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default GardeningExperience;
