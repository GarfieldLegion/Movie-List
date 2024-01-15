import "@/styles/globals.scss";
import Layout from "@/layouts/layout";
import { useStore } from "@/store/index";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = extendTheme({
  fonts: {
    heading: `'UnitedKingdomFont', sans-serif`,
    body: `'SfProDisplayRegular', sans-serif`,
  },
  colors: {
    green: {
      50: "#EB00FF",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#EB00FF",
      600: "#E6FFFA",
      700: "#81E6D9",
      800: "#234E52",
      900: "#1D4044",
    },
  },
});

function App({ Component, pageProps }) {
  const store = useStore(pageProps.ssrStoreState);
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <ToastContainer
            className={"customized"}
            autoClose={3000}
            draggable
            hideProgressBar={false}
            closeOnClick={false}
            theme="colored"
          />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
