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
          placeholder="62123456789"
          bg="gray.100" 
          color="green.800"
          value={number}
          onChange={handleNumberChange}
          w={[
            '84%',
            '90%',
            '100%',
            '100%'
          ]}
        />
      </InputGroup>
      <Box mt="2" float="right">
        <Link color="green.400" as={RLink} to={{ pathname: '/phonebook' }}>
          <Box bg="gray.100" rounded="5px" p="3">
            <Box d="flex">
              <Box as={MdPermContactCalendar} size="16px" color="green.400" />
              <Text fontSize="xs">
                Phonebook
              </Text>
            </Box>
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