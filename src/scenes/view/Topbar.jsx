import React from 'react';
import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Topbar = ({ setIsHidden }) => {
  const iconButtonStyle = {
    color: 'white',
    fontSize: '24px',
    marginRight: '30px',
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#191F45" padding="10px">
      <Box display="flex" alignItems="center">
        {/* toggle */}
        <IconButton onClick={() => setIsHidden(hidden => !hidden)}>
          <MenuOutlinedIcon sx={{ color: 'white', marginLeft: "15px" }} />
        </IconButton>
        {/* search box */}
        <Box display="flex" backgroundColor="#21295B" borderRadius="3px" width="250px">
          <InputBase sx={{ ml: 2 }} placeholder="Search..." style={{ color: 'white' }} />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon style={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>
      {/* left icons */}
      <Box display="flex" alignItems="center">
        <IconButton sx={iconButtonStyle}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton sx={iconButtonStyle}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={iconButtonStyle}>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ...iconButtonStyle, marginRight: '50px', color: '#ffedc2' }}>
          <ArrowDropDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
