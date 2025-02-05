import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';

interface NavMenuToggleProps {
    menuOpen: boolean;
    setMenuOpen: (_: boolean) => void;
}
const NavButton: React.FC<NavMenuToggleProps> = ({menuOpen, setMenuOpen}) => {
    const path1Controls = useAnimation();
    const path2Controls = useAnimation();
    const path1Variants = {
        open: {d:"M3.06061 2.99999L21.0606 21"},
        closed: {d: "M0 8.5L24 8.5"}
    };
    const path2Variants = {
        open: {d:"M3.00006 21.0607L21 3.06064"},
        closed: {d: "M0 15.5L24 15.5"}
    };
    useEffect(() => {
        if(menuOpen){
            path1Controls.start(path1Variants.open);
            path2Controls.start(path2Variants.open);
        }else{
            path1Controls.start(path1Variants.closed);
            path2Controls.start(path2Variants.closed );
        }
    }, [menuOpen])
  return (
    <div onClick={()=>setMenuOpen(!menuOpen)} className='relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-amber-400 z-50'>
        <svg width="24" height="24" viewBox="0 0 24 24" >
          <motion.path {...path1Variants.closed} animate={path1Controls}/>
          <motion.path {...path2Variants.closed} animate={path2Controls}/> 
          
        </svg>
    </div>
  )
}

export default NavButton