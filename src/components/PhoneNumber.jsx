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

const InputNumber = ({ onNumberChange }) => {
  const [number, setNumber] = React.useState('')
  const handleNumberChange = (e) => {
    let value = e.target.value
    setNumber(value)
    onNumberChange(value)
  }
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
          value={number}
          onChange={handleNumberChange}
        />
      </InputGroup>
      <Box mt="2" float="right">
        <Link color="white" as={RLink} to={{ pathname: '/phonebook' }}>
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

const PhonebookNumber = ({ data, changeField }) => {
  return (
    <Box>
      <Stack isInline py="2">
        <Text color="white">Send to: </Text>
        <Badge>{ data.name } ({ data.number })</Badge>
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

const PhoneNumber = ({ 
  newNumber, 
  changeNumberField, 
  onNumberChange,
  contactData
}) => {
  if (newNumber) {
    return <InputNumber onNumberChange={onNumberChange} />
  } else {
    return <PhonebookNumber data={contactData} changeField={changeNumberField} />
  }
}

export default PhoneNumber;