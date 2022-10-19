import type { AppProps } from "next/app";

import "../styles/styles.css";
import { initThinBackend } from "thin-backend";
import { ThinBackend } from "thin-backend-react";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/system";
import styled from "@emotion/styled";

const Scene = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Montserrat, "Noto Sans Arabic", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  background: rgb(213, 104, 0);
`;

const Element = styled.div`
  position: fixed;
  background-color: rgb(0, 0, 0);
  transform: rotate(45deg);
  opacity: 0.1;
  top: -15vmin;
  left: -15vmin;
  min-width: 75vmin;
  min-height: 75vmin;
`;

const Circle = styled.div`
  position: fixed;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  opacity: 0.1;
  min-width: 75vmin;
  min-height: 75vmin;
  bottom: -15vmin;
  right: -15vmin;
`;

initThinBackend({
  host: "https://baectivity.thinbackend.app",
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThinBackend>
      <ThemeProvider theme={theme}>
        <Scene>
          <Element />
          <Circle />
          <Component {...pageProps} />
        </Scene>
      </ThemeProvider>
    </ThinBackend>
  );
}

export default MyApp;
