import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box >
      <Typography
        variant="h2"
        color='#e0e0e0'
        fontWeight="bold"
        
      >
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="700" color='#ffedc2'>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
