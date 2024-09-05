import { useContext } from "react";
import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { AuthStore } from "../store/Auth-Contexe";
import "../styles/header.css";

const Navigation = () => {
  const AuthCtx = useContext(AuthStore);
  return (
    <chakra.header id="header" borderBottom="1px solid rgb(0,0,0,0.3)">
      <Flex w="100%" py="2" align="center" justify="space-between">
        <Link to="/">
          <Heading fontSize="3xl" justify="space-between" color="pink.700" ml={10}>
          Accueil
          </Heading>
        </Link>
        

        <ButtonGroup as="nav" variant="link" spacing="5">
          {/* <Button as={Link} to="/home" fontSize="16px">
            Accueil
          </Button> */}

          {AuthCtx.showModeratorBoard && (
            <Button as={Link} to="/mod" fontSize="16px">
              Moderator Board
            </Button>
          )}

          {AuthCtx.showAdminBoard && (
            <Button as={Link} to="/admin" variant="solid" mx={20}>
             Tableau de Bord
            </Button>
          )}

          {!AuthCtx.showModeratorBoard &&
            !AuthCtx.showAdminBoard &&
            AuthCtx.currentUser && (
              <Button as={Link} to="/user"  variant="solid" mx={20}>
                Tableau de Bord
              </Button>
            )}
        </ButtonGroup>

        <HStack spacing="5" ml="auto">
        {AuthCtx.currentUser ? (
          <>
            <Button as={Link} to="/profile"  variant="solid">
              {AuthCtx.currentUser.username}
            </Button>
            <Button
              as="a"
              href="/login"
              mr={10}
              variant="outline"
              onClick={AuthCtx.logOut}
            >
              LogOut
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to="/login"  variant="solid">
            Connexion
            </Button>
            <Button as={Link} to="/register" mr={10} variant="outline">
            Inscription
            </Button>
          </>
        )}
      </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navigation;
