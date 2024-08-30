import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Container, Typography } from "@mui/material"
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CardContainer = styled(Container)`
  margin-top: 40px;
  max-width: 600px;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// HTTP Methods in REST API with React Query
// ====
//   useQuery hook from react-query
//     load users -- GET 
  
//   useMutation hook from react-query
//     create user -- POST 
//     update user -- PUT / PATCH
//     delete user -- DELETE

 //reading URL param id from the route
//  let {id} = useParams();
//  console.log(id);
 //why id-> refer Routing files
 //Form validation in CreateUser using react-hook-form
 //Passing Parameters in the URL


 //modify the fetchUserDetails function to accept an id parameter and use it in the fetch URL 
 //The id type is also being provided 
  const fetchUserDetails = async (id: string | undefined) => { 
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // passing the id
  console.log(response);
  if (!response.ok) {
    throw new Error("Network response was not Ok");
  }
  return response.json();
};

const UserDetails = () => {
  let { id } = useParams();
  console.log(id);

  const { isLoading, isError, data: user, error } = useQuery({
    queryKey: ['userDetails',id], //Dont use same name as the const. Taking id in useQuery hook. 
    queryFn: () => fetchUserDetails(id), //passing id to fetchUserDetails from useParams
  });

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
    <CardContainer>
      <Typography variant="h2">User Details</Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            User Id: {user.id}
          </Typography>
          <Typography variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2">Phone: {user.phone}</Typography>
          <Typography variant="body2">Email: {user.email}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Edit
          </Button>
          <Button size="small" variant="outlined" color="error">
            Delete
          </Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

export default UserDetails;
