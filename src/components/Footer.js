import { Text, Center} from '@chakra-ui/react';
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className="footer-container">
      <Center
        borderTopEndRadius='50%'
        bg='pink.700'
        color='white'
        width='100%'
        textAlign='center'
        p='2'
      >
        <Text fontSize='15px'>Copyright &copy; 2024. All rights reserved.</Text>
      </Center>
    </div>
  )
}

export default Footer