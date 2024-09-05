import {
  VStack,
  HStack,
  Image,
  Box,
  Text,
  Flex,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
// Assurez-vous d'importer correctement votre image

const CardDemande = ({ annonce }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("fr-FR", options);
      };
  return (
    <>
      <Flex justify="center" align="center">
        <Stack
          justify="center"
          width="300px"
          bg="white"
          boxShadow="xl"
          borderRadius="xl"
          p="6"
        >
        
        <HStack>
        <Image
            src="/avatar.jpg"
            borderRadius="full"
            boxSize="75px"
            alt="Avatar"
          />
            <Box>
            <Text fontWeight="bold" fontSize="lg">
             Pseudo : {annonce.user.username}
            </Text>
            <Text fontSize="sm">Tlf : {annonce.user.phoneNumber}</Text>
            <Text fontSize="sm">E-mail : {annonce.user.email}</Text>
            </Box>
        </HStack>
        
        
        


          
          <VStack p="6" align="left">
            
            <Text fontSize="sm">Date de début : {formatDate(annonce.date_debut)}</Text>
            <Text fontSize="sm">Date de fin : {formatDate(annonce.date_fin)}</Text>
            <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6'>
            <Text fontSize="sm">{annonce.description}</Text>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

export default CardDemande;
