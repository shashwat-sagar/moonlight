import {motion} from "framer-motion";
import "../../styles/menu.scss";

const MenuCard = ({ img, label }:any) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
     className=" w-full h-auto   rounded-lg  shadow-lg flex flex-col ">
      <img className="m-10 w-96 h-96  card-Img" src={img} alt={label} />
      <div className="p-4 ">
        <h3 className="cardTxt">{label}</h3>
        {/* <p className="text-gray-600 mt-2">{description}</p> */}
        
      </div>
    </motion.div>
  );
};

export default MenuCard;