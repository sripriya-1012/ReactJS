//parent

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

interface RecommendedShowProps {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  isFavorite: boolean;
  handleManageFavorites: (id: number) => void;
}

const RecommendedShow = (props: RecommendedShowProps) => {
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
              <IconButton
                  aria-label="add to favorites"
                  onClick={() => props.handleManageFavorites(props.id)}
              >
                  {/* Conditional Rendering inside JSX */}
                  {props.isFavorite ? (
                      <FavoriteIcon sx={{ color: pink[500] }} />
                  ) : (
                      <FavoriteIcon />
                  )}
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
          </CardActions>
      </Card>
  );
};

export default RecommendedShow;
