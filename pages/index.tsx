import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../common/components/dataDisplay/Card";
import WhatDoYouThink from "../common/components/dataInput/WhatDoYouThink";
import { default as charityProjects } from "../common/datasample/charityProject";

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
        <GridItem
          colSpan={2}
          height="min-content"
          padding="2"
          my="2"
          backgroundColor={boxBackground}
          rounded="md"
          shadow="md"
        >
          <WhatDoYouThink />
        </GridItem>

        <GridItem
          padding="2"
          my="2"
          backgroundColor={boxBackground}
          rounded="md"
          shadow="2xl"
        >
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
