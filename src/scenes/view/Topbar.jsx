import React from 'react';
import { Box, IconButton } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Topbar = ({ setIsHidden }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#191F45" padding="10px"> {/* Adjusted padding */}
      <Box display="flex" alignItems="center">
        {/* MENU OUTLINE ICON */}
        <IconButton onClick={() => setIsHidden(hidden => !hidden)}>
          <MenuOutlinedIcon style={{ color: 'white', marginLeft: "15px" }} />
        </IconButton>

        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor="#21295B" borderRadius="3px">
          <InputBase sx={{ ml: 2 }} placeholder="Search..." style={{ color: 'white' }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon style={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton sx={{ color: 'white', fontSize: '24px', marginRight: '30px' }}>
          <DarkModeOutlinedIcon />
        </IconButton>
        
        <IconButton sx={{ color: 'white', fontSize: '24px', marginRight: '30px'}}>
          <SettingsOutlinedIcon />
        </IconButton>
        
        <IconButton sx={{ color: 'white', fontSize: '24px', marginRight: '30px' }}>
          <PersonOutlinedIcon />
        </IconButton>
        
        <IconButton sx={{ color: 'white', fontSize: '24px', marginRight: '50px', color:'#ffedc2' }}>
          <ArrowDropDownIcon />
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default Topbar;
