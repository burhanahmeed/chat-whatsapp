import React  from 'react';
import { 
  InputLeftAddon, 
  InputGroup, 
  Input, 
  Icon, 
  Box,
  Link,
  Text,
  Stack,
  Badge
} from "@chakra-ui/core";
import { Link as RLink } from 'react-router-dom';
import { MdPermContactCalendar } from "react-icons/md"
import { AiOutlineWhatsApp } from "react-icons/ai"

const InputNumber = ({ changeField }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon children={<Icon name="phone" color="green.800" />} />
        <Input 
          type="tel" 
          roundedLeft="0" 
          placeholder="example: 6259402131xxx"
          bg="green.800" 
          border="green.700" 
          color="white"
        />
      </InputGroup>
      <Box mt="2" float="right">
        <Link color="white" as={RLink} to={{pathname: '/phonebook', state: {'aaa': 111}}}>
          <Box d="flex">
            <Box as={MdPermContactCalendar} size="16px" color="green.400" />
            <Text fontSize="xs">
              Phonebook
            </Text>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

const PhonebookNumber = ({ changeField }) => {
  return (
    <Box>
      <Stack isInline py="2">
        <Text color="white">Send to: </Text>
        <Badge>urhan ahmed (6239912000)</Badge>
        <Link color="white" onClick={changeField}>
          <Box d="flex">
            <Box as={AiOutlineWhatsApp} size="16px" color="green.400" mx="1" />
            <Text fontSize="xs">
              Input new number
            </Text>
          </Box>
        </Link>
      </Stack>
    </Box>
  )
}

const PhoneNumber = ({ newNumber, changeNumberField }) => {
  if (newNumber) {
    return <InputNumber changeField={changeNumberField} />
  } else {
    return <PhonebookNumber changeField={changeNumberField} />
  }
}

export default PhoneNumber;