import { useColorModeValue } from "@chakra-ui/color-mode";

export default function useThemeColor() {
	const boxBackground = useColorModeValue("white", "gray.700");
  const cardBg = useColorModeValue("white", "gray.900");

	return { boxBackground, cardBg };
}
