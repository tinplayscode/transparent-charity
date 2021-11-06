import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  useImage,
  useStyleConfig,
  Text,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";

interface Props {
  variant?: "default";
  children?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  link: string;
}

function Card(props: Props): JSX.Element {
  const { variant, children, title, description, image, link, ...rest } = props;
  const status = useImage({ src: image });

  const styles = useStyleConfig("Card", { variant });

  const cardBg = useColorModeValue("white", "gray.900");
  const cardText = useColorModeValue("black", "whiteAlpha.900");
  // Pass the computed styles into the `__css` prop
  return (
    <Box
      __css={styles} // for variant
      display="flex"
      bgColor={cardBg}
      gap={6}
      textColor={cardText}
      _hover={{
        transform: "translateY(-.25rem)",
      }}
      transition="transform .5s"
      boxShadow={"xl"}
      {...rest}
    >
      {status == "loaded" ? (
        <Image
          src={image}
          width={{ base: 32 }}
          objectFit="cover"
          rounded="md"
          height={{ base: 32 }}
        />
      ) : (
        <Skeleton height={32} width={32} />
      )}

      <Flex flexDirection="column" ml={2} mt={4}>
        <Text>{title}</Text>
        {description && <Text>{description}</Text>}
      </Flex>
    </Box>
  );
}

export default Card;
