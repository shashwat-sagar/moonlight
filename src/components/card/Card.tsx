import { motion } from "framer-motion";

const Card = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className=" home-Card-Body w-96  rounded-lg shadow-lg m-2 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }} // Trigger animation when 30% of the card is in view
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" }, // Add smooth ease-in-out effect
      }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="home-Card-Img w-96 h-96 object-cover rounded-t-lg rounded-b-3xl"
      />
      <div className="home-Card-Text-Ctn">
        <h3 className="home-Card-Head text-wrap text-center">{title}</h3>
        <p className="home-Card-Des text-wrap text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
