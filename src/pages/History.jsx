import React, {useEffect, useState} from 'react';
import {
  Box,
  Badge,
  Text
} from '@chakra-ui/core'

const History = () => {
  const [histories, setHistories] = useState([])
  useEffect(() => {
    let initial = localStorage.getItem('history')    
    if (initial) {
      initial = JSON.parse(initial)
      setHistories([...initial])
    }
  }, [])
  return (
    <Box color="white" w="100%">
      <Box>
        <Text fontWeight="bold">My History</Text>
        <Text>The list of your recent chat histories</Text>
      </Box>
      <Box h="calc(100vh - 120px)" overflowX="auto">
        {
          histories.map(el => {
            return (
              <Box borderBottom="1px" borderBottomColor="gray.500" p="3">
                <Box d="flex" justifyContent="space-between">
                  <Box>
                    <Badge variantColor="green">{el.number}</Badge>
                    <Text fontSize="xs">{el.text}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs">
                      {new Date(el.createdAt).toDateString()} - {new Date(el.createdAt).toTimeString().substr(0, 5)}
                    </Text>
                  </Box>
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  );
}

export default History;