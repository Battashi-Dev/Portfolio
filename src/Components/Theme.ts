import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  semanticToken: {
    colors: {
      "chakra-body-bg": { _dark: "gray.900", _light: "white" },
      "chakra-body-text": { _dark: "whiteAlpha.900", _light: "gray.800" },
    },
  },
  colors: {
    brand: {
      accent: "#2499e1",
    },
  },
});
