import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

const Footer = function () {
    const copyrightYear = 2024;
  
    // must return JSX
    return (
      <Box>
        <Divider />
        <Typography variant="body2" gutterBottom>
          Copyright 2024 | My Big App
          Copyright {copyrightYear} | My Big App
        </Typography>
      </Box>
    );

}
export default Footer;


