import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

const StyledBox = styled(Box)`
  padding: 80px;
  color: Black;
`;

const HomePage = () => {
  return (
    <StyledBox>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Typography variant="h1" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </StyledBox>
  );
};

export default HomePage;
