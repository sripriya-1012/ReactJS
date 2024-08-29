import { Box, Button, Grid, Typography } from "@mui/material";
import TrendingShow from "./TrendingShow";
import { useState } from "react";

const TrendingShowList = () => {
  /*
    * state is a component-wide updatable data.
    * state should not be updated directly
    * use the setter function to update state
  */
  const [resolution, setResolution] = useState("HD");
  const [shows] = useState([
    {
      title: "Game of Thrones",
      category: "Drama",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      description: "Game of Thrones is an epic fantasy series.",
    },
    {
      title: "The Shawshank...",
      category: "Drama",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      description: "The Shawshank Redemption is a drama film, released in 1994.",
    },
  ]); 

  const handleSwitchResolution = () => { 
    setResolution("4K");
  }

  return (
    <>
      <Box>
        <Typography variant="h5">
          Enjoy watching Trending Shows in {resolution}
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={handleSwitchResolution}
        >
          Switch Resolution
        </Button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TrendingShow
              title={shows[0].title}
              category={shows[0].category}
              thumbnail={shows[0].thumbnail}
              description={shows[0].description}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* Here's the shortcut to the above version */}
            <TrendingShow
               {...shows[1]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrendingShowList;