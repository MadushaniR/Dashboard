import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
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
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Corrected import

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? '#000000' : '#FFEDC2', // Black for selected, Cream for unselected
        fontSize: '18px',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Box display="flex" alignItems="center">
        <Typography fontSize="16px">{title}</Typography>
        {selected === title && (
          <Typography
            fontSize="20px"
            color="#000000"
            ml="10px"
            fontWeight="bold"
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box background= '#2a2d64' marginTop="-10px" marginLeft="-15px">
      {!isHidden && (
        <Box
          sx={{
            '& .pro-sidebar-inner': {
              background: '#2a2d64',
              marginLeft: '-15px',
              width: '270px',
              overflowY: 'auto',
              height: '100vh',
            },
            '& .pro-icon-wrapper': {
              backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
              padding: '10px 35px 10px 20px !important',
            },
            '& .pro-inner-item:hover': {
              backgroundColor: '#3c4090 !important',
            },
            '& .pro-menu-item.active': {
              color: '#000000 !important',
              backgroundColor: '#FFE3A3 !important',
            },
          }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              <div style={{fontSize:"24px",fontWeight:"700",textAlign:"center",color:"#FFEDC2",marginBottom:"25px",marginTop:"10px"}}>LAVONTECH</div>
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
                  color="#FFEDC2"
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }}
                >
                  Client Facing
                </Typography>
                <Item
                  title="Products"
                  to="/Product"
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
                  color="#FFEDC2"
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }}
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
                  color="#FFEDC2"
                  sx={{ m: '15px 0 5px 20px', fontSize: '16px' }}
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
