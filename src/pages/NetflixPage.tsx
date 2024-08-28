import { Container, Divider, Typography } from "@mui/material"
import LatestShowList from "../components/netflix/LatestShowList";
import TrendingShowList from "../components/netflix/TrendingShowList";

const NetflixPage = () => {
  return (
   <Container>
      <Typography variant="h1">Netflix</Typography>

      <Typography variant="h2">Latest Shows</Typography>
      <LatestShowList />

      <Divider />

      <Typography variant="h2">Trending Shows | States and Events Demo</Typography>
      <TrendingShowList />

      <Divider />

      <Typography variant="h2">Recommended Shows | States,Events,Lists,Keys and conditonal function demo</Typography>
      <TrendingShowList />



    </Container>
  );
}

export default NetflixPage