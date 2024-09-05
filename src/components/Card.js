import { Link } from "react-router-dom";
import "../styles/card.css";
import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

export default function Card({ stadium }) {
  return (
    <Flex justify="center" align="center">
      <Stack
        justify="center"
        width="300px"
        bg="white"
        boxShadow="xl"
        borderRadius="xl"
      >
        <VStack p="4" align="left">
          <Divider my="2.5" />

          <HStack spacing="5">
            <HStack>
              <Text fontSize="12px">{stadium.name}</Text>
            </HStack>

            <HStack>
              <Text fontSize="12px">{stadium.location}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
}
