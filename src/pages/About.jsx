import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { 
  Box,
  Text,
  Image,
  Link,
  Button
} from '@chakra-ui/core';
// import '../style/Markdown.css';
const AboutPage = () => {

  const gotoKaryakarsa = () => {
    window.open('https://karyakarsa.com/burhanahmeed', '_blank');

  }

  return (
    <Box>
      <Text fontWeight="bold">About</Text>
      <Box py="5">
        Whatsy is a tool to help you sending a Whatsapp message without saving the number on your phone.
      </Box>
      <Box>
        <Text fontWeight="bold">Built with</Text>
        <Box>
          <Image h="80px" d="inline-block" p="2" m="2" bg="gray.100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" 
          alt="React Logo" />
          <Image h="80px" d="inline-block" p="2" m="2" bg="gray.100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--CrLDj6Kp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/chakra-ui/chakra-ui/raw/master/logo/logo-colored%402x.png%3Fraw%3Dtrue" alt="React Logo" />
        </Box>
      </Box>
      <Box>
        <Text fontWeight="bold">Support</Text>
        <Box my="2">
          <Button verticalAlign="top" mb="2" d="inline-block" onClick={gotoKaryakarsa} variantColor="green">Karyakarsa</Button>
          <Link mx="3" d="inline-block" as="a" href="https://www.buymeacoffee.com/zOkT07A" isExternal>
            <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" h="40px" />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutPage