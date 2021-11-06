import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Layout from "../common/components/Layout";
import {
  default as theme,
  cssResetConfig as config,
} from "../common/config/charkaTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset config={config} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
