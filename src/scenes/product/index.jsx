import { Box } from "@mui/material";
import Header from "../../components/Header";

const Product = () => {

  return (

    <Box m="20px" backgroundColor='#191F45' padding="10px" marginTop="-5px" height="105%" marginLeft="-15px" width="100%">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="PRODUCTS" subtitle="Here your listings products" />
      </Box>
    </Box>
  );
};

export default Product;
