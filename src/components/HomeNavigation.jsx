import React, { useEffect, useState } from 'react'
import {Link as RLink, useLocation} from 'react-router-dom'
import {
  Box,
  Text,
  Link
} from '@chakra-ui/core'

const HomeNavigation = () => {
  let location = useLocation()
  let [route, setRoute] = useState('')  
  const [isTextShowed, setIsTextShowed] = useState(true)
  useEffect(() => {    
    setRoute(location.pathname)
    let width = window.innerWidth
    if (width < 500) {
      setIsTextShowed(false)
    }
  }, [])
  return (
    <Box>
      <Box borderBottom="1px" borderBottomColor="#0000001a" pb="2">
        <Box d="flex" fontSize="14px">
          <Link as={RLink} to="/" fontWeight={route == '/' ? 'bold': ''} mx="2">
            Personal { isTextShowed ? ' messages': ' msg' }
          </Link>
          <Link as={RLink} to="/broadcast" fontWeight={route == '/broadcast' ? 'bold': ''} mx="2">
            Broadcast { isTextShowed ? ' messages': ' msg' }
          </Link>
        </Box>
      </Box>
      <Box fontSize="xs" p="4">
        {
          route == '/' ? (
            <Text>Using Personal Messages you can send message to unsaved number.</Text>
          ) : route == '/broadcast' ? (
            <Text>Using Broadcast Messages you can send message to groups or Whatsapp contacts in bulk.</Text>
          ) : ''
        }
      </Box>
    </Box>
  )
}

export default HomeNavigation