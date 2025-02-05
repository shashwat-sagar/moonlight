import { images } from "../../assets/food";
import { motion } from "framer-motion";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
const cards = [
  {
    image: images[0],
    title: "Veg snacks and starter",
    description: "Indian Starters samosa, pakora, etc",
  },
  {
    image: images[1],
    title: "Non veg starter",
    description: "This is card 2",
  },
  {
    image: images[2],
    title: "Karahi paneer",
    description: "Spicy karahi paneer",
  },
  {
    image: images[3],
    title: "Boiled salad",
    description: "Healthy salad",
  },
  {
    image: images[4],
    title: "Gajar ka halwa",
    description: "indian sweet dish",
  },
];
const Menu = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/menu"); // Adjust the path as needed
  };
  return (
    <section
      className="flex flex-col md:flex-row justify-around items-center m-4 
       "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }} // Trigger animation when 30% of the card is in view
        transition={{ duration: 0.5 }}
        className="hidden md:block"
      >
        <h1
          className="text-6xl font-bold m-10"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
          }}
        >
          MENU
        </h1>
      </motion.div>
      <div className="block md:hidden">
        <h1 className="text-6xl font-bold ">MENU</h1>
      </div>
      <div className="w-full md:w-3/4 ">
        <h1 className="home-Menu-Subtitle pb-20 ">View Our Services & Menu</h1>
        <div className=" flex flex-wrap items-center justify-center pb-20  rounded-lg ">
          {cards.map((card, index) => (
            <Link to="/menu" key={index}>
              <div key={index} onClick={handleCardClick}>
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
