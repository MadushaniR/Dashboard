import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    <Box m="20px" height="calc(100vh - 40px)" backgroundColor={colors.blueAccent[1000]}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: colors.redAccent[500],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[1400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography variant="h5" fontWeight="bold" ml="10px">Total Customers</Typography>
            <PersonAddIcon sx={{ color: colors.primary[1200], fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color={colors.primary[1200]} mr="5px">+21%</Typography>
            <Typography variant="h5" color={colors.grey[100]}>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[1400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography variant="h5" fontWeight="bold" ml="10px">Sales Today</Typography>
            <PointOfSaleIcon sx={{ color: colors.primary[1200], fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color={colors.primary[1200]} mr="5px">+21%</Typography>
            <Typography variant="h5" color={colors.grey[100]}>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[1400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <Typography variant="h4" fontWeight="bold">Loading Data</Typography>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[1400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography variant="h5" fontWeight="bold" ml="10px">Monthly Sales</Typography>
            <PointOfSaleIcon sx={{ color: colors.primary[1200], fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color={colors.primary[1200]} mr="5px">+5%</Typography>
            <Typography variant="h5" color={colors.grey[100]}>Since last month</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[1400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="20px"
          borderRadius="10px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Typography variant="h5" fontWeight="bold" ml="10px">Yearly Sales</Typography>
            <TrafficIcon sx={{ color: colors.primary[1200], fontSize: "26px" }} />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color={colors.primary[1200]} mr="5px">+43%</Typography>
            <Typography variant="h5" color={colors.grey[100]}>Since last month</Typography>
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[1400]}
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
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
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
