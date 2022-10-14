import type { AppProps } from "next/app";

import "../styles/styles.css";
import { initThinBackend } from "thin-backend";
import { ThinBackend } from "thin-backend-react";

initThinBackend({
  host: "https://baectivity.thinbackend.app",
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThinBackend>
      <Component {...pageProps} />
    </ThinBackend>
  );
}

export default MyApp;
