import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../models/IProduct";
import { useCartStore } from "../store/useCartStore";
import { Helmet } from "react-helmet-async";

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const ProductsPage = () => {
  const { data: products, isLoading, error, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

const {addToCart} = useCartStore();

  return (
    <Container>
      <Helmet>
        <title>Products Page</title>
      </Helmet>
      <h1>Products</h1>
      <Grid container spacing={2}>
      {products?.map((product:IProduct) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.description}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                size="small" 
                variant="contained" 
                color="error"
                onClick={()=>addToCart(product)}
                >
                  Add To Cart
                </Button>
                <Button size="small" variant="outlined">
                  Add to Wishlist
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))};
      </Grid>
    </Container>
  );
};

export default ProductsPage;