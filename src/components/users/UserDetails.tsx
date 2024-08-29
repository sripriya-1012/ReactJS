import { Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material"
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

const CardContainer = styled(Container)`
  margin-top: 40px;
  max-width: 600px;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserDetails = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['fetchUserDetails'],
    //     queryFn: () =>
    //       fetch('https://jsonplaceholder.typicode.com/users/1').then((res) =>
    //         res.json(),
    //       ),
    //   })
    
    //   if (isPending) return 'Loading...'
    
    //   if (error) return 'An error has occurred: ' + error.message
    
  return (
    <CardContainer>
      <Typography variant="h2">User Details</Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 16}}
          >
            User Id: 1
          </Typography>
          <Typography variant="h4" component="div">
            John Doe
          </Typography>

          <Typography variant="body2">Phone: 1234567890</Typography>
          <Typography variant="body2">EMail: a@k.com</Typography>
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
}

export default UserDetails