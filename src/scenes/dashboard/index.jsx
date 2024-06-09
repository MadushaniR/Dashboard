import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="calc(100vh - 40px)" backgroundColor={colors.blueAccent[1000]}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashbord" />
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
          {/* <Typography variant="h6" fontWeight="bold" mb="20px">
            Transactions
          </Typography> */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction, i) => (
                <tr key={i}>
                  <td>{transaction.txId}</td>
                  <td>{transaction.user}</td>
                  <td>{transaction.email}</td>
                  <td>{transaction.city}</td>
                  <td>{transaction.state}</td>
                  <td>{transaction.country}</td>
                  <td>{transaction.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
