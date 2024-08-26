import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

// Anonymous function
const Footer = function(){
    return(
        <Box>
            <Divider/>
            <Typography variant="body1" gutterBottom>
                Copyright | 2024 | Sri
            </Typography>
        </Box>
    );
};

export default Footer;