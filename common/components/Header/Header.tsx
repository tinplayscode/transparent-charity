import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Link as CharkaLink,
	useColorMode,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IoPersonCircle, IoSunny, IoMoon, IoList } from "react-icons/io5";

interface Props {}

function Header({}: Props): ReactElement {
	const { colorMode, toggleColorMode } = useColorMode();
	const { data, status } = useSession();

	return (
		<>
			<Flex
				bgColor={colorMode === "light" ? "white" : "gray.900"}
				position="sticky"
				top={0}
				left={0}
				right={0}
				zIndex={100}
				boxShadow="md"
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

				<Box justifyContent="flex-end" display="flex" gridColumnGap={0}>
					<Link href="/categories">
						<CharkaLink>
							<Button
								variant="solid"
								colorScheme="cyan"
								size="md"
								leftIcon={<IoList />}
							>
								Dự án
							</Button>
						</CharkaLink>
					</Link>
					<Button
						variant="ghost"
						display="flex"
						alignItems="center"
						onClick={() => {
							if (status === "loading") {
								return;
							}

							if (status === "authenticated") {
								signOut();
							} else {
								signIn();
							}
						}}
					>
						<Icon as={IoPersonCircle} boxSize={6} />
					</Button>

					<Button variant="ghost" onClick={toggleColorMode}>
						{colorMode === "light" ? (
							<Icon as={IoMoon} boxSize={5} />
						) : (
							<Icon as={IoSunny} boxSize={5} />
						)}
					</Button>
				</Box>
			</Flex>

			{/*Charka UI toast*/}
			<Box
				zIndex={100}
				padding={4}
				bg="red.100"
				color="red.500"
				fontSize="sm"
				fontWeight="bold"
				textAlign="center"
				borderRadius="md"
			>
				{data && data.user.name}
			</Box>
		</>
	);
}

export default Header;
