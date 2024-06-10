import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[1100],
        fontSize: '18px',  // Increased font size
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Box display="flex" alignItems="center">
        <Typography fontSize="16px">{title}</Typography> {/* Increased font size */}
        {selected === title && (
          <Typography
            fontSize="16px"
            color="#000000" // Changed to black color
            ml="10px"
          >
            {'>'}
          </Typography>
        )}
      </Box>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isHidden, setIsHidden }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box>
      {!isHidden && (
        <Box
          sx={{
            '& .pro-sidebar-inner': {
              background: `${colors.blueAccent[800]} !important`,
              marginLeft: '-15px', // Adjust the margin
              width: '220px', // Increased sidebar width
              overflowY: 'auto', // Added for vertical scrolling
              height: '100vh', // Ensures the sidebar takes full height of the viewport
            },
            '& .pro-icon-wrapper': {
              backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
              padding: '10px 35px 10px 20px !important', // Increased padding for larger font
            },
            '& .pro-inner-item:hover': {
              color: '#ffedc2 !important',
              backgroundColor: `${colors.blueAccent[700]} !important`,
            },
            '& .pro-menu-item.active': {
              color: '#000000 !important',
              backgroundColor: `${colors.primary[1300]} !important`,
            },
          }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              <div style={{fontSize:"24px",fontWeight:"700",textAlign:"center",color:"rgb(255, 227, 163)",marginBottom:"25px",marginTop:"10px"}}>LAVONTECH</div>
              <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.primary[1200]}
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }} // Increased font size
                >
                  Client Facing
                </Typography>
                <Item
                  title="Products"
                  to="/team"
                  icon={<ProductionQuantityLimitsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Customers"
                  to="/contacts"
                  icon={<GroupsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Transactions"
                  to="/invoices"
                  icon={<ReceiptLongIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography"
                  to="/invoices"
                  icon={<PublicIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.primary[1200]}
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }} // Increased font size
                >
                  Sales
                </Typography>
                <Item
                  title="Overview"
                  to="/form"
                  icon={<PointOfSaleIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Daily"
                  to="/calendar"
                  icon={<EventIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Monthly"
                  to="/faq"
                  icon={<CalendarMonthIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Breakdown"
                  to="/faq"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.primary[1200]}
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }} // Increased font size
                >
                  Management
                </Typography>
                <Item
                  title="Admin"
                  to="/bar"
                  icon={<AdminPanelSettingsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Performance"
                  to="/pie"
                  icon={<TrendingUpIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Menu>
          </ProSidebar>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
