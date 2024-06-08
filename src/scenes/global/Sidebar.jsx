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
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
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
              marginLeft: '-27px',
            },
            '& .pro-icon-wrapper': {
              backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
              padding: '5px 35px 5px 20px !important',
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
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: '10px 0 20px 0',
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <div variant="h3" color={colors.primary[1300]}>
                      LAVONTECH
                    </div>
                  </Box>
                )}
              </MenuItem>

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
                  sx={{ m: '15px 0 5px 20px' }}
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
                  sx={{ m: '15px 0 5px 20px' }}
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
                  sx={{ m: '15px 0 5px 20px' }}
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
