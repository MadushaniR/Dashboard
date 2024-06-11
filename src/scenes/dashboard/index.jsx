import React from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const columns = [
    { field: "ID", headerName: "ID", flex: 1 },
    { field: "Name", headerName: "Name", flex: 1 },
    { field: "Email", headerName: "Email", flex: 1 },
    { field: "City", headerName: "City", flex: 1 },
    { field: "State", headerName: "State", flex: 1 },
    { field: "Country", headerName: "Country", flex: 1 },
    { field: "Phone", headerName: "Phone", flex: 1 },
  ];

  // Define the height based on the screen size
  const dashboardHeight = isSmallScreen ? "calc(100vh - 56px)" : "100%";

  return (
    <Box
      m="20px"
      backgroundColor='#191F45'
      padding="10px"
      marginTop="-5px"
      marginLeft="-15px"
      width="100%"
      height={dashboardHeight} // Set height based on screen size
      overflow="auto" // Enable scrolling if content exceeds the height
    >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: '#f44336',
            color: '#fff',
            fontSize: isSmallScreen ? "10px" : "14px", // Adjust font size based on screen size
            fontWeight: "bold",
            padding: "10px 20px",
            marginRight: "3%",
            "&:hover": {
              backgroundColor: '#f44336' // Ensure hover color is the same
            }
          }}
        >
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)", // 1 column for extra-small screens
          sm: "repeat(1, 1fr)", // 1 column for small screens
          md: "repeat(3, 1fr)", // 3 columns for medium screens
          lg: "repeat(6, 1fr)"  // 6 columns for large screens
        }}
        gridAutoRows="140px"
        gap="20px"
        marginTop='40px'
        marginLeft='40px'
      >
        {/* ROW 1 */}
        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 1" }}
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px' marginTop='10px' color='rgb(255, 246, 224)' lineHeight='1.6' >Total Customers</Typography>
            <PersonAddIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" fontStyle='italic' mr="5px">+21%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 1" }}
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px' marginTop='10px' color='rgb(255, 246, 224)' lineHeight='1.6' >Sales Today</Typography>
            <PointOfSaleIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle='italic'>+21%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
        {/* LOADING DATA BOX */}
        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 4" }}
          gridRow="span 2"
          backgroundColor="#21295B"
          display="flex"
          justifyContent="flex-start"
          borderRadius="10px"
          padding="10px"
          alignItems="start"
        >
          <Typography fontSize="16px" fontWeight="400" color="#fff" textAlign="left" >
            Loading data...
          </Typography>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 1" }}
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px' marginTop='10px' color='rgb(255, 246, 224)' lineHeight='1.6' >Monthly Sales</Typography>
            <PointOfSaleIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle='italic'>+5%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 1" }}
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px' marginTop='10px' color='rgb(255, 246, 224)' lineHeight='1.6' >Yearly Sales</Typography>
            <TrafficIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle='italic'>+43%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>

        <Box
          gridColumn={{ xs: "span 1", sm: "span 1", md: "span 6" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 4", lg: "span 4" }} // Adjust grid row span for large screens
          backgroundColor="#21295B"
          p="20px"
          borderRadius="10px"
          height="70%"
          border="none"
        >
          <Box height="100%" border="none">
            <DataGrid
              border="none"
              rows={mockTransactions}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              getRowId={(row) => row.ID}
              color="#fff" // Set text color to white
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                  color: "#fff !important", // Set text color to white
                  backgroundColor: "#21295c",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#21295c",
                  borderBottom: "none",
                  color: "#fff !important", // Set text color to white
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#1F2A40",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: "#21295c",
                  color: "#fff !important", // Set text color to white
                },
                "& .MuiDataGrid-footer": {
                  backgroundColor: "#21295c",
                  color: "#fff !important", // Set text color to white
                },
                "& .MuiTablePagination-caption": {
                  color: "#fff !important", // Set pagination text color to white
                },
                "& .MuiCheckbox-root": {
                  color: "#fff !important", // Set icon color to white
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
