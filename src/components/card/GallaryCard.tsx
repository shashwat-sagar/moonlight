import {motion} from "framer-motion";

// MasonryBox component
const GallaryCard = ({image, title, description  }:any) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
     className={" gallery-Card overflow-hidden  "}>
      <img className="gallery-Card-Img" src={image}  alt="" />
      <div className={"gallery-Card-Text-Ctn   z-10   opacity-0 hover:opacity-100 hover:border-2  transition duration-1000 ease-in-out "}>
        
        <h1 className="gallery-Card-Title">{title}</h1>
        <p className="gallery-Card-Para">{description}</p>
      </div>
    </motion.div>
  );
};

// validate GallaryCard component
// GallaryCard.propTypes = {
//   wallSrc: PropTypes.string.isRequired,
//   userProf: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
//   userJob: PropTypes.string.isRequired,
// }

export default GallaryCard;
