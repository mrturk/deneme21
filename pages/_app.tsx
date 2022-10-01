import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Stack, Typography } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <Stack
        alignItems="center"
        color="white"
        height="300px"
        paddingTop="100px"
      >
        <Stack>
          <Typography fontSize="26px" fontWeight="400">
            REFERANS
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize="40px" fontWeight="100">
            Y A Z I L I M
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default MyApp;
