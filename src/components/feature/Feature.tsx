import FeatureCard from "./FeatureCard";
import { PiChefHatLight, PiBowlFood } from "react-icons/pi";
import { SlEvent } from "react-icons/sl";
import "./Feature.scss";
const data = [
  {
    icon: <PiBowlFood className="text-5xl text-yellow-500" />,
    title: "Quality Food",
    description: "We provide quality food with the best ingredients.",
  },
  {
    icon: <SlEvent className="text-5xl text-yellow-500" />,
    title: "Event Catering",
    description: "We provide catering services for all types of events.",
  },
  {
    icon: <PiChefHatLight className="text-5xl text-yellow-500" />,
    title: "Experienced chefs",
    description: "We have experienced chefs who can cook delicious food.",
  },
  {
    icon: <PiBowlFood className="text-5xl text-yellow-500" />,
    title: "Quality Food",
    description: "We provide quality food with the best ingredients.",
  },
  {
    icon: <SlEvent className="text-5xl text-yellow-500" />,
    title: "Event Catering",
    description: "We provide catering services for all types of events.",
  },
  {
    icon: <PiChefHatLight className="text-5xl text-yellow-500" />,
    title: "Experienced chefs",
    description: "We have experienced chefs who can cook delicious food.",
  },
];
const Feature = () => {
  return (
    <div className="relative">
      <div className="bgImg"></div>
      <div className="m-5  flex flex-col justify-between items-center text-center ">
        <p className="feature-CardTxt my-10">FEATURE</p>
        <div>
          <h1 className="feature-Title my-20">Why people choose us?</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {data.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="feature-Date-Main">
          <h1 className="feature-Title mb-10">Working Hour</h1>
          <div className="feature-Date-c">
            <div className=" feature-Date-inner  p-20 flex-col sm:flex-row">
              <p className="feature-Date-Txt">
                Mon - Fri: 09:00 - 17:00
              </p>
              <p className="feature-Date-Txt">
                Sat - Sun: 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
