import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Text,
  Image as CharkaImage,
  VStack,
  Stack,
  Flex,
  AvatarBadge,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import { Fragment } from "react";
import { IoStar } from "react-icons/io5";
import BreadCrumb from "../common/components/BreadCrumb";
import Card from "../common/components/dataDisplay/Card";
import WhatDoYouThink from "../common/components/dataInput/WhatDoYouThink";
import { default as charityProjects } from "../common/datasample/charityProject";
import { default as transactionLog } from "../common/datasample/transactionLog";

export default function Home() {
  const boxBackground = useColorModeValue("white", "gray.700");

  return (
    <div>
      <Head>
        <title>Trang chủ - tuthien.com</title>
      </Head>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 0, md: 2 }}
      >
        {/* Left panel */}
        <GridItem colSpan={2}>
          <BreadCrumb items={[{ url: "/", name: "Trang chủ" }]} />
          <Box
            height="min-content"
            padding="2"
            my="2"
            backgroundColor={boxBackground}
            rounded="md"
            shadow="md"
          >
            <WhatDoYouThink />
          </Box>

          <Box
            height="min-content"
            padding="2"
            my="2"
            backgroundColor={boxBackground}
            rounded="md"
            shadow="md"
          >
            <PopularPosts />
          </Box>

          <Box
            height="min-content"
            padding="2"
            my="2"
            backgroundColor={boxBackground}
            rounded="md"
            shadow="md"
          >
            <CharityLog />
          </Box>
        </GridItem>

        {/* Right panel */}
        <GridItem padding={{ md: "2" }} my="2" rounded="md" shadow="2xl">
          <Grid gap="2">
            {charityProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}

function PopularPosts() {
  const cardBg = useColorModeValue("white", "gray.900");

  return (
    <Box>
      <Heading as="h2" fontSize="xl" fontWeight="normal">
        Popular Posts
      </Heading>
      <Stack my={2} p="3" shadow="xl" bg={cardBg} rounded="md">
        <Flex gridColumnGap={2} alignItems="center">
          {/* User Info */}
          <Avatar src="https://picsum.photos/200/300">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Stack spacing="1px">
            <Box as="span">Nguyễn Trung Tín</Box>
            <Box
              as="span"
              fontSize="xs"
              display="flex"
              alignItems="center"
              gridColumnGap={0.5}
            >
              <Icon as={IoStar} />
              Nhà từ thiện nồng cốt
            </Box>
          </Stack>
        </Flex>
        {/* Content */}
        <Box>
          <Heading as="h3" fontSize="md" fontWeight="normal">
            Tại sao nhà từ thiện nồng cốt cần giúp đỡ những người bị giảm cân?
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Nhà từ thiện nồng cốt có thể giúp đỡ những người bị giảm cân và có
            thể giúp đỡ những người bị bệnh nhiễm môi trường.
          </Text>

          <CharkaImage
            objectFit="contain"
            width="100%"
            maxHeight="20rem"
            src="https://picsum.photos/400/1000"
          ></CharkaImage>
        </Box>
      </Stack>{" "}
    </Box>
  );
}

function CharityLog() {
  return (
    <Box overflowX="auto" maxWidth="100%">
      <Heading as="h2" fontSize="xl" fontWeight="normal">
        Vừa từ thiện
      </Heading>
      <Table variant="simple" minWidth="1200px">
        <TableCaption>Dữ liệu được cập nhật thời gian thực</TableCaption>
        <Thead>
          <Tr>
            <Th>Mã số</Th>
            <Th>Dự án</Th>
            <Th>Ngày thu</Th>
            <Th>Số tiền/Hiện vật</Th>
            <Th>Nhà hảo tâm</Th>
            <Th>Mục đích</Th>
          </Tr>
        </Thead>
        <Tbody fontSize="sm">
          {transactionLog.map((log) => (
            <Tr key={log.id}>
              <Td>{log.id}</Td>
              <Td>{log.project}</Td>
              <Td>{log.date}</Td>
              <Td>{log.amount}</Td>
              <Td>{log.donor}</Td>
              <Td>{log.purpose}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Mã số</Th>
            <Th>Dự án</Th>
            <Th>Ngày thu</Th>
            <Th>Số tiền/Hiện vật</Th>
            <Th>Nhà hảo tâm</Th>
            <Th>Mục đích</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}
