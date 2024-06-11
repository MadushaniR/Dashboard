import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box >
      <Typography
        variant="h4"
        color='#fff6e0'
        fontWeight="bold"
        marginLeft="40px"
        marginTop="25px"

      >
        {title}
      </Typography>
      <Typography variant="p" fontWeight="700" color='#ffe3a3' marginLeft="45px" >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
