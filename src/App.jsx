import React, { useEffect, useState } from 'react';
// import './App.css';

import { Box, Text, Image, Link, Flex, Badge } from "@chakra-ui/core";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Phonebook from './pages/Phonebook.jsx';
import History from './pages/History.jsx';
import Broadcast from './pages/Broadcast.jsx';

import { Route, Switch, Link as RLink, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isTextShowed, setIsTextShowed] = useState(true)
  useEffect(() => {
    let width = window.innerWidth
    if (width < 500) {
      setIsTextShowed(false)
    }
  }, [])
  return (
    <Box w="100%" minH="100vh" bg="gray.50">
      <Router>
        <Box alignItems="center" p="5">
          <Box d="block" textAlign="center" mb="4">
            <Box>
              <Image verticalAlign="top" d="inline-block" m="auto" h="40px" src="/Whatsy.png" alt="history" />
              <Text 
                d="inline-block"
                m="0"
                fontSize="3xl" 
                fontWeight="bold"
                color="green.700"
              >
                <Link as={RLink} to="/">
                  Whatsy
                </Link>
              </Text>
            </Box>
            <Text fontSize="xs">
              Send Whatsapp message without saving the number on your phone.
            </Text>
          </Box>
          <Box d="block">
            <Box textAlign="center">
              <Link mx="2" as={RLink} to="/" py="3">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                🏠
                {
                  isTextShowed ? ' Home' : ''
                }
                </Box>
              </Link>
              <Link mx="2" as={RLink} to="/history" py="3">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                🧳
                {
                  isTextShowed ? ' Message history' : ''
                }
                </Box>
              </Link>
              <Link mx="2" as={RLink} to="/about" py="3">
                <Box bg="gray.200" p="2" d="inline-block" borderRadius="5px">
                👋🏻
                {
                  isTextShowed ? ' About' : ''
                }
                </Box>
              </Link>
            </Box>
          </Box>

          <Box w="100%">
            <Flex 
              align="center" 
              borderRadius="md" 
              m="5" 
              mx="auto"
              width={[
                "100%", // base
                "70%", // 480px upwards
                "70%", // 768px upwards
                "70%", // 992px upwards
              ]}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/phonebook" component={Phonebook} />
                <Route path="/history" component={History} />
                <Route path="/broadcast" component={Broadcast} />
              </Switch>
            </Flex>
          </Box>

        </Box>
      </Router>
      <Box p="6" color="green.700" textAlign="center">
        <Box>
          <Text fontSize="xs">
            A product by &nbsp;
            <Link href="https://twitter.com/burhannahm" isExternal>
              <Badge variantColor="green">@Burhannahm</Badge>  
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
