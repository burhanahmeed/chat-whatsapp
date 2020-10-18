import React from 'react';
// import './App.css';

import { Box, Text, Link, Flex, Badge } from "@chakra-ui/core";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Phonebook from './pages/Phonebook.jsx';
import History from './pages/History.jsx';

import { Route, Switch, Link as RLink, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Box w="100%" minH="100vh" bg="gray.50">
      <Router>
        <Box alignItems="center" p="5">
          <Box d="block" textAlign="center" mb="4">
            <Text 
              m="0"
              fontSize="3xl" 
              fontWeight="bold"
              color="green.700"
            >
              <Link as={RLink} to="/">
                Whatsy
              </Link>
            </Text>
            <Text fontSize="xs">
              Send Whatsapp message without saving the number on your phone.
            </Text>
          </Box>
          <Box d="block">
            <Box textAlign="center">
              <Link mx="2" as={RLink} to="/">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                🏠 Home
                </Box>
              </Link>
              <Link mx="2" as={RLink} to="/history">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                🧳 Message history
                </Box>
              </Link>
              <Link mx="2" as={RLink} to="/about">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                👋🏻 About
                </Box>
              </Link>
            </Box>
          </Box>

          <Box w="100%">
            <Flex align="center" w="70%" borderRadius="md" m="5" mx="auto">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/phonebook" component={Phonebook} />
                <Route path="/history" component={History} />
              </Switch>
            </Flex>
          </Box>

        </Box>
      </Router>
      <Box p="6" color="green.700" textAlign="center">
        <Box>
          <Text fontSize="xs">
            A product by &nbsp;
            <Link href="https://kusiaga.com" isExternal>
              <Badge variantColor="green">Burhannahm</Badge>  
            </Link>
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs">
            Source code on &nbsp;
            <Link 
              href="https://github.com/burhanahmeed/chat-whatsapp" 
              isExternal 
              color="blue.800"
              fontWeight="bold"
            >Github</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
