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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

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
    <Box sx={{ 
      background: '#2a2d64',
      marginTop: "-10px",
      marginLeft: "-15px",
      '@media (max-height: 800px)': {
        '& .pro-sidebar-inner': {
          height: 'calc(100vh - 56px)',
        },
      },
      '@media (max-height: 600px)': {
        '& .pro-sidebar-inner': {
          height: 'calc(100vh - 56px)',
          fontSize: '14px',
        },
        '& .pro-inner-item': {
          padding: '10px 20px !important',
        },
      },
      '@media (max-height: 400px)': {
        '& .pro-sidebar-inner': {
          height: 'calc(100vh - 56px)',
          fontSize: '12px',
        },
        '& .pro-inner-item': {
          padding: '5px 15px !important',
        },
      },
    }}>
      {!isHidden && (
        <Box
          sx={{
            '& .pro-sidebar-inner': {
              background: '#2a2d64',
              marginLeft: '-15px',
              width: '270px',
              overflowY: 'auto',
              height: 'calc(100vh - 56px)',
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
              <div style={{ fontSize: "24px", fontWeight: "700", textAlign: "center", color:'#ffedc2', marginBottom: "25px", marginTop: "10px" }}>LAVONTECH</div>
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
                  to="/Product"
                  icon={<GroupsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Transactions"
                  to="/Product"
                  icon={<ReceiptLongIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography"
                  to="/Product"
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
                  to="/Product"
                  icon={<PointOfSaleIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Daily"
                  to="/Product"
                  icon={<EventIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Monthly"
                  to="/Product"
                  icon={<CalendarMonthIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Breakdown"
                  to="/Product"
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
                  to="/Product"
                  icon={<AdminPanelSettingsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Performance"
                  to="/Product"
                  icon={<TrendingUpIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Menu>
            <hr width="100%"></hr>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px">
              <PersonOutlinedIcon sx={{ marginLeft: '50px' }} />
              <SettingsOutlinedIcon />
            </Box>
          </ProSidebar>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
