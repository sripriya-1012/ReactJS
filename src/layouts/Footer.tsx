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


// // Anonymous function
// const Footer = function(){
//     return(
//         <Box>
//             <Divider/>
//             <Typography variant="body1" gutterBottom>
//                 Copyright | 2024 | Sri
//             </Typography>
//         </Box>
//     );
// };

// export default Footer;