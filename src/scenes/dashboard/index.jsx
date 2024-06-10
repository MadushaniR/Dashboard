import { Box, Button, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {

  const columns = [
    { field: "txId", headerName: "ID", flex: 1 },
    { field: "user", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
  ];

  return (
    <Box m="20px" backgroundColor='#191F45' padding="10px" marginTop="-5px" marginLeft="-15px" width="100%">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: '#f44336',
            color: '#fff',
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            marginRight:"3%"
          }}
        >
          <DownloadOutlinedIcon  />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        marginTop='40px'
        marginLeft='40px'
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 1"
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px'marginTop='10px' color='rgb(255, 246, 224)' lineHeight= '1.6' >Total Customers</Typography>
            <PersonAddIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" fontStyle= 'italic' mr="5px">+21%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px'marginTop='10px' color='rgb(255, 246, 224)' lineHeight= '1.6' >Sales Today</Typography>
            <PointOfSaleIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle= 'italic'>+21%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
           {/* LOADING DATA BOX */}
           <Box
        gridColumn="span 4"
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
          gridColumn="span 1"
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px'marginTop='10px' color='rgb(255, 246, 224)' lineHeight= '1.6' >Monthly Sales</Typography>
            <PointOfSaleIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle= 'italic'>+5%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor="#21295B"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography fontSize='15px' fontWeight="500" marginRight='10px'marginTop='10px' color='rgb(255, 246, 224)' lineHeight= '1.6' >Yearly Sales</Typography>
            <TrafficIcon sx={{ color: "#ffedc2", fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize='16px' fontWeight="400" color="#ffedc2" mr="5px" fontStyle= 'italic'>+43%</Typography>
            <Typography fontSize='14px' fontWeight="400" color='#fff' marginLeft='20%'>Since last month</Typography>
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor="#21295B"
          p="20px"
          borderRadius="10px"
        >

          <Box height="100%">
            <DataGrid
              rows={mockTransactions}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              getRowId={(row) => row.txId}
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#3e4396",
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: "#1F2A40",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: "#3e4396",
                },
                "& .MuiCheckbox-root": {
                  color: `'1F2A40' !important`,
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
