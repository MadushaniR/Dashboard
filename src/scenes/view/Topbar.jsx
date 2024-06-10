import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Topbar = ({ setIsHidden }) => {

  return (
    <Box display="flex" justifyContent="space-between" backgroundColor="#191F45" marginTop="-8px" marginLeft="-15px" padding='10px'> {/* Adjusted margin */}
      <Box display="flex" alignItems="center">
        {/* MENU OUTLINE ICON */}
        <IconButton onClick={() => setIsHidden(hidden => !hidden)}>
          <MenuOutlinedIcon style={{ color: 'white' }} />
        </IconButton>

        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor="#21295B" borderRadius="3px" >
          <InputBase sx={{ ml: 2 }} placeholder="Search..." style={{ color: 'white' }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon style={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton style={{ color: 'white' }}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: 'white' }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
