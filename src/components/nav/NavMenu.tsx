import{ useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { AnimatePresence, motion } from "framer-motion";

const pages = [
  { name: "Home", id: 1, path: "/" },
  { name: "About", id: 2, path: "/about" },
  { name: "Contact", id: 3, path: "/contact" },
  { name: "Services", id: 4, path: "/services" },
  { name: "Pricing", id: 5, path: "/pricing" },
  { name: "Gallery", id: 6, path: "/gallery" },
];
const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative block sm:hidden ">
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="absolute -top-2 -right-2 rounded-md bg-neutral-50 p-8 z-10 flex flex-col origin-top-right"
        >
          <ul className="flex flex-col gap-2 flex-1">
            {pages.map((page) => (
              <Link key={page.id} to={page.path}>
                {page.name}
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
