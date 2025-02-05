import MenuCard from "../components/menu/MenuCard";
import { images } from "../assets/food";
import { Link,Element } from "react-scroll";
import "../styles/menu.scss";
const vegMainCourse = [
  {
    id: 1,
    label: "Paneer Mughlai",
  },
  {
    id: 2,
    label: "Dabhai Paneer",
  },
  {
    id: 3,
    label: "Paneer Tikka Masala",
  },
  {
    id: 4,
    label: "Veg Jalfrezi",
  },
  {
    id: 5,
    label: "Aloo Methi",
  },
  {
    id: 6,
    label: "Veg Nargisi Kofta",
  },
];
const nonVegMainCourse = [
  {
    id: 1,
    label: "Chicken Korma",
  },
  {
    id: 2,
    label: "Bhuna Gosht",
  },
  {
    id: 3,
    label: "Mutton Mughlai Korma",
  },
  {
    id: 4,
    label: "Chicken Biryani",
  },
  {
    id: 5,
    label: "Mutton Biryani",
  },
  {
    id: 6,
    label: "Prawns Biryani",
  },
];
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 12); // Random number between 0 and 12
  return images[randomIndex];
};

const categories = [
  { id: "nonVegMainCourse", name: "Non Veg Main Course" },
  { id: "vegMainCourse", name: "Veg Main Course" },
];

const Menu = () => {
  return (
    <div className=" min-h-screen  m-0 md:m-20 ">
      <div className="h-60 "></div>
      {/* Navigation Menu */}
   <div className="menu-c">
   <nav className="menu shadow-md  p-4 flex justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.id}
            smooth={false}
            duration={1000}
            className="menu-nav"
          >
            {category.name.toUpperCase()}
          </Link>
        ))}
      </nav>
   </div>

      <h1 className="menu-Title">Cuisines</h1>
      <div className="p-4 w-10/12 flex flex-col justify-center items-center mx-auto">
        {/* Veg Main Course Section */}
        <Element name="vegMainCourse" className="mb-16"></Element>
        <div className="text-center text-6xl font-bold">
          <h1 className="menuHeading">Veg Main Course</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 m-10">
            {vegMainCourse.map((item, index) => (
              <MenuCard key={index} img={getRandomImage()} label={item.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 w-10/12 flex flex-col justify-center items-center mx-auto">
        <Element name="nonVegMainCourse" className="mb-16"></Element>
        <div className="text-center text-6xl font-bold">
          <h1 className="menuHeading">NonVeg Main Course</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 m-10">
            {nonVegMainCourse.map((item, index) => (
              <MenuCard key={index} img={getRandomImage()} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
