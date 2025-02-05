import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data?: { id: number; title: string; link: string, icon: JSX.Element }[];
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, data }) => {
  const list = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'transparent',
        color: '#e4c590',
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List >
        {data &&
          data.map((item) => (
            <ListItem key={item.id} divider className='nav-item-drawer'>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <div className='nav-link-drawer'>
                  <Link to={item.link} >{item.title}</Link>
                </div>
                {/* <ListItemText primary={item.title} className='nav-link-drawer text-2xl'  /> */}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={() => {}}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#00000080', 
          backdropFilter: 'blur(4px)',
        },
      }}
    >
      {list}
    </SwipeableDrawer>
  );
};

export default Drawer;
