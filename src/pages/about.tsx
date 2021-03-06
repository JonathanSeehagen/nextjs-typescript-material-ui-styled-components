import React from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProTip from "../ProTip";
import Copyright from "../Copyright";
import { LinkStyle } from "../styles/pages/about";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ m: 2 }}>
          <Typography variant="h4" component="h1" align="center">
            Next.js with TypeScript, Material-UI and Styled-Components
          </Typography>
          <Link href="/">
            <LinkStyle>{"<-- Back to the main page"}</LinkStyle>
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default About;
