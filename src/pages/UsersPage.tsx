import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface IUser {
  id: number;
  name: string;
  phone: string;
}

const UsersPage = () => {
  console.log("Program Started");
  const [isLoading, setIsLoading] = useState(true); // loading state
  const [users, setUsers] = useState<IUser[] | []>([]); // positive state 
  const [isError, setIsError] = useState(false); // error state

  // How to connect to the backend rest api
  // 1. What is the backend api url? https://jsonplaceholder.typicode.com/users
  // 2. What is the HTTP method? GET
  // 3. What is the REST API Client? npm i axios

  // useEffect -> react hook to connect to backend and get data. 
  // takes two parameters-function and array(can be empty)

  useEffect(() => {
    console.log("Inside UseEffect");
    // ideal place to fetch data from the backend
    // this callback fn will be called after first render. 
    // First UI is painted only then function gets called.
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        // success
        // console.log(response);
        console.log("Successful Response");
        setIsLoading(false);
        setUsers(response.data);
        console.log(response.data);
        // We are updating the state 2 times (setIsLoading and setUsers) 
        // React uses batch processing to update all states at once 
        // Search for Automatic batch processing in react
        // Dont use ';' its for ending statement. And use '.' for chaining
      })
      .catch((error) => {
        // error
        console.log("Error Response");
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        // finally
        console.log("It is over");
        setIsLoading(false);
      });
  }, []
    // Empty array is a dependency array. 
    // Empty array means it will run only once
    // If something is given, it would run long(infinite somethings if value isn't proper)
  );

  console.log("Program Ended");
  return (
    
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
       <Helmet>
      <title>Users Page</title>
      </Helmet>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Welcome to&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              User Manager App!
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Manage Users, Create, List, Edit, Delete, and more!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/users/create"
          >
            Create User
          </Button>
        </Stack>
      </Container>

      <Container>
        <Typography variant="h2" sx={{ mt: 10 }}>
          Listing Users
        </Typography>

        {isLoading && <CircularProgress color="success" />}

        {isError && (
          <Alert severity="error">
            Sorry! Some Error occured! Try again later!
          </Alert>
        )}

        <Grid container spacing={2}>
          {users?.map((user: IUser) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                {/* keep the key in the first tag after map*/}
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      #{user.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      phone: {user.phone}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/users/${user.id}`}>
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};


export default UsersPage;