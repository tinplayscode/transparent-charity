import {
  Button,
  Flex,
  Heading,
  Link as CharkaLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useTheme } from "@chakra-ui/react";

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
      boxSizing="border-box"
      alignItems="center"
      justifyContent="space-between"
      paddingX={{ base: 4, md: 16 }}
    >
      <Link href="/">
        <CharkaLink padding={4} _hover={{ backgroundColor: "green.800" }}>
          <Heading fontFamily="monospace" fontSize="2xl" as="h1">
            Tuthien
          </Heading>
        </CharkaLink>
      </Link>

      <Button>
        <h1>Đăng nhập</h1>
      </Button>

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
}

export default Header;
