import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

interface TrendingShowProps {
  title: string;
  category: string;
  thumbnail: string;
  description: string;
}

const TrendingShow = (props: TrendingShowProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.title} subheader={props.category} />
      <CardMedia
        component="img"
        height="194"
        image={props.thumbnail}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TrendingShow;