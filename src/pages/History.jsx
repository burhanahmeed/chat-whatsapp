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

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure want to delete all of your history?')) {
      localStorage.removeItem('history')
      setHistories([])
    }
  }

  return (
    <Box color="green.700" w="100%">
      <Box d="flex" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">My History</Text>
          <Text>List your recent chat history</Text>
        </Box>
        <Box>          
          <Text fontSize="xs" cursor="pointer" borderBottom="1px" onClick={handleDeleteAll}>
            Delete all histories
          </Text>
        </Box>
      </Box>
      <Box h="calc(100vh - 120px)" overflowX="auto">
        {
          histories.map(el => {
            return (
              <Box bg="gray.100" p="3" mb="2">
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