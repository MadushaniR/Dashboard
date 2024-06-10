import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Topbar = ({ setIsHidden }) => {


  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor="#191F45">
      <Box display="flex" alignItems="center">
        {/* MENU OUTLINE ICON */}
        <IconButton onClick={() => setIsHidden(hidden => !hidden)}>
          <MenuOutlinedIcon />
        </IconButton>

        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor="#21295B" borderRadius="3px" >
          <InputBase sx={{ ml: 2 }} placeholder="Search..." />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton >
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
