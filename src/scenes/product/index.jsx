import { Box } from "@mui/material";
import Header from "../../components/Header";

const Product = () => {
  return (
    <Box
      m="0"
      padding="0"
      width="100%"
      minHeight="100vh" // Set minHeight to ensure it fills the viewport height
      backgroundColor='#191F45'
      display="flex" // Use flex to fill the available space
      flexDirection="column" // Arrange children vertically
    >
      {/* HEADER */}
      <Header title="PRODUCTS" subtitle="Here your listings products" />
      {/* Content */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center"> {/* Center the content vertically */}
        <Box maxWidth="80%" textAlign="center">
          {/* Add your content here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
