import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link as CharkaLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import {
  IoLogInOutline,
  IoMoon,
  IoMoonOutline,
  IoPersonCircle,
  IoSunny,
  IoSunnyOutline,
} from "react-icons/io5";

interface Props {}

function Header({}: Props): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bgColor={colorMode === "light" ? "white" : "gray.900"}
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      boxShadow="2xl"
      alignItems="center"
      justifyContent="space-between"
      paddingX={{ base: 4, md: 16 }}
    >
      <Link href="/">
        <CharkaLink
          padding={4}
          rounded="2xl"
          _hover={{ backgroundColor: "pink.100" }}
        >
          <Heading fontFamily="monospace" fontSize="2xl" as="h1">
            TuthienMinhbach
          </Heading>
        </CharkaLink>
      </Link>

      <Box justifyContent="flex-end" display="flex" gridColumnGap={1}>
        <Button variant="ghost" display="flex" alignItems="center">
          <Icon as={IoPersonCircle} boxSize={7} />
        </Button>

        <Button variant="ghost" onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Icon as={IoMoon} boxSize={7} />
          ) : (
            <Icon as={IoSunny} boxSize={7} />
          )}
        </Button>
      </Box>
    </Flex>
  );
}

export default Header;
