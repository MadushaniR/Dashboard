import { Box } from "@mui/material";
import Header from "../../components/Header";

const Product = () => {
  return (
    <Box
      m="0"
      padding="0"
      width="100%"
      minHeight="100vh"
      backgroundColor='#191F45'
      display="flex"
      flexDirection="column"
    >
      {/* HEADER */}
      <Header title="PRODUCTS" subtitle="Here your listings products" />
      {/* Content */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box maxWidth="80%" textAlign="center">
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
