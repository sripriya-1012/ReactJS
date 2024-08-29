import { Container, Divider, Typography } from "@mui/material"
import LatestShowList from "../components/netflix/LatestShowList";
import TrendingShowList from "../components/netflix/TrendingShowList";
import RecommendedShowList from "../components/netflix/RecommendedShowList";

const NetflixPage = () => {
  return (
   <Container>
      <Typography variant="h1">Netflix</Typography>

      <Typography variant="h2">Latest Shows</Typography>
      {/* |props demo */}
      <LatestShowList />

      <Divider />

      <Typography variant="h2">Trending Shows</Typography>
      {/* | States and Events Demo */}
      <TrendingShowList />

      <Divider />

      <Typography variant="h2">Recommended Shows</Typography> 
      {/* | States,Events,Lists,Keys and conditonal rendering demo */}
      <RecommendedShowList />



    </Container>
  );
}

export default NetflixPage