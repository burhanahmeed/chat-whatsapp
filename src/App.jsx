import React from 'react';
// import './App.css';

import { ThemeProvider, Box, Text, Link } from "@chakra-ui/core";
import theme from "./theme";

import Home from './pages/Home.jsx';
import About from './pages/About';

import { Route, Switch, Link as RLink, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box w="100%" bg="#276749" minH="100vh">
        <Router>
          <Box alignItems="center" p="3">
            <Box d="block">
              <Text 
                textAlign="center" 
                fontSize="3xl" 
                fontWeight="bold"
                color="white"
              >
                Chat Whatsapp
              </Text>
            </Box>
            <Box d="block">
              <Box textAlign="center">
                <Link as={RLink} to="/about">
                  About
                </Link>
              </Box>
            </Box>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
