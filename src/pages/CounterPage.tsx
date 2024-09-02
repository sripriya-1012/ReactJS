
import { Button, Container } from "@mui/material";
import { useCounterStore } from "../store/useCounterStore";
import { Helmet } from "react-helmet-async";

const CounterPage = () => {
  const {count, increment,decrement,reset} = useCounterStore();
  console.log(count);

  return (
    <Container>
       <Helmet>
        <title>Counter Page</title>
      </Helmet>
      <h1>Counter Page</h1>
      <p>Counter: {count}</p>
      <Button
        variant="contained"
        color="success"
        onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" color="error"
        onClick={decrement}>
        Decrement
      </Button>
      <Button variant="contained" color="warning"
        onClick={reset}>
        Reset
      </Button>
    </Container>
  );
};

export default CounterPage;