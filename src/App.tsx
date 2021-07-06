import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

// APP ROUTE
import AppRoute from './route';

function App() {
  return (
    <Router>
      <Container maxW="8xl" paddingTop={100} paddingBottom={100}>
        <AppRoute />
      </Container>
    </Router>
  );
}

export default App;
