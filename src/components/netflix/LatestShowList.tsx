import { Box, Grid } from "@mui/material";
import LatestShow from "./LatestShow";

const LatestShowList = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LatestShow
            title="Mission Impossible"
            category="Action"
            thumbnail="https://placehold.co/600x400/000000/FFF?text=Mission+Impossible"
          >
            Mission Impossible is a 1989 American action film directed by Brian
            De Palma and written by David Koepp. The film stars Tom Cruise as
            John McClane, a Navy SEAL.
          </LatestShow>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LatestShow
            title="The Godfather"
            category="Action"
            thumbnail="https://placehold.co/600x400/000000/FFF?text=The+Godfather"
          >
            The Godfather is a 1972 American crime drama film directed by
            Francis Ford Coppola and written by Mario Puzo. The film stars Al
            Pacino and Robert De Niro.
          </LatestShow>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LatestShow
            title="Money Heist"
            category="Thriller"
            thumbnail="https://placehold.co/600x400/000000/FFF?text=Money+Heist"
          >
            Money Heist is a Netflix original series created by and starring
            Jesse Armstrong. The series premiered on October 1, 2021. The
            series is a Thriller.
          </LatestShow>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <LatestShow
            title="The Big Bang Theory"
            category="Comedy"
            thumbnail="https://placehold.co/600x400/000000/FFF?text=The+Big+Bang+Theory"
          >
            The Big Bang Theory is an American comedy television series created
            by and starring Seth MacFarlane. The series premiered on September
            20, 2021.
          </LatestShow>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestShowList;