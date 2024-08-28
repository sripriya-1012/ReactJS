import { Box, Grid } from "@mui/material";
import RecommendedShow from "./RecommendedShow";

const RecommendedShowList = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RecommendedShow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecommendedShowList;