import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Container,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const fetchUserDetails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const UserDetails = () => {
 
  let { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: user, error } = useQuery({
    queryKey: ["userDetails"],
    queryFn: fetchUserDetails,
  });

  const handleEdit = () => {
    navigate(`/edit-user/${id}`);
    console.log("Edit user:", user);
  };

  const handleDelete = () => {
    console.log("Delete user:", user);
    toast.error("User deleted successfully!");
  };

  if (isLoading) {
    return (
      <StyledContainer>
        <CircularProgress />
      </StyledContainer>
    );
  }

  if (isError) {
    return (
      <StyledContainer>
        <Alert severity="error">
          An error has occurred. {(error as Error).message}
        </Alert>
      </StyledContainer>
    );
  }

  return (
    <Container>
       <Helmet>
        <title>UserDetails Page</title>
      </Helmet>
      <div style={{ width: "100%" }}>
        <Typography variant="h1">User Details</Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              User Id: {user?.id}
            </Typography>
            <Typography variant="h5" component="div">
              {user?.name}
            </Typography>
            <Typography variant="body2">Phone: {user?.phone}</Typography>
            <Typography variant="body2">Email: {user?.email}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={handleEdit}>
              Edit
            </Button>
            <Button size="small" variant="outlined" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default UserDetails;
