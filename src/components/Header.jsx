import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box >
      <Typography
        variant="h4"
        color='#e0e0e0'
        fontWeight="bold"
        marginLeft="40px"
        marginTop="25px"
        
      >
        {title}
      </Typography>
      <Typography variant="p" fontWeight="700" color='#ffedc2' marginLeft="45px" >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
