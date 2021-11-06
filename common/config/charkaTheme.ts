import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Card = {
  // The styles all Cards have in common
  baseStyle: {},
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: { base: 2, md: 4 },
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
};

const theme: ThemeConfig = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        lineHeight: "base",
        bg: mode(
          "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
          "gray.800"
        )(props),
        backgroundAttachment: "fixed",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
  components: {
    Card,
  },
});

export default theme;
