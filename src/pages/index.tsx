import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProTip from '../ProTip';
import Copyright from '../Copyright';

import { LinkStyle } from '../styles/pages/home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <Container maxWidth="sm">
        <Box sx={{ m: 2 }}>
          <Typography variant="h4" component="h1" align="center">
            Next.js with TypeScript, Material-UI and Styled-Components
          </Typography>
          <Link href="/about">
            <LinkStyle>
              {"Go to the about page -->"}
            </LinkStyle>
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
