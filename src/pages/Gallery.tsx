import { Modal } from "antd";
import { images } from "../assets/moonLight";
import GallaryCard from "../components/card/GallaryCard";
import "../styles/gallary.scss";
import { useState} from "react";
const cards = [
  {
    image: images[0],
    title: "Veg snacks and starter",
    description: "spring roll, paneer tikka",
  },
  {
    image: images[1],
    title: "Non veg starter",
    description: "chicken tikka, chicken lollipop",
  },
  {
    image: images[2],
    title: "Desserts",
    description: "Gulab jamun, Rasgulla",
  },
  {
    image: images[3],
    title: "Breakfast",
    description: "Sandwich, Poha",
  },
  {
    image: images[4],
    title: "Lunch",
    description: "Dal, Rice",
  },
   
  {
    image: images[5],
    title: "Veg snacks and starter",
    description: "mushroom tikka, paneer tikka",
  },
  {
    image: images[6],
    title: "Non veg starter",
    description: "chicken tikka, chicken lollipop",
  },
  {
    image: images[7],
    title: "Kebabs",
    description: "unlimited kebabs",
  },
  {
    image: images[0],
    title: "Veg snacks and starter",
    description: "spring roll, paneer tikka",
  },
];

const Gallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="gallery m-10">
      <div className="h-60 "></div>
      <div className="gallery-Container">
        <h1 className="gallery-Title">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((item, index) => (
            <div key={index} onClick={() => showModal(index)}>
              <GallaryCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
      open={isModalVisible}
        onCancel={handleCancel}
        footer={
          <>
            <h1>{cards[currentIndex].title}</h1>
            <p>{cards[currentIndex].description}</p>
          </>
        }
        centered
        className="custom-modal"
      >
        <div className=" flex justify-center items-center w-full h-[400px]">
          <img
            src={cards[currentIndex].image}
            alt={cards[currentIndex].title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
