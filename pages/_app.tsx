import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../common/components/Layout";
import { default as theme } from "../common/config/charkaTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
