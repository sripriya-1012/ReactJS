import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh' 
    }}>
       <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to Homepage
      </Button>
    </Container>
  );
};

export default PageNotFound;
