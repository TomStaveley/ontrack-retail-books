import React from 'react';
import { CssBaseline, Container, Fab } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardArrowUp } from '@material-ui/icons';

import theme from '../config/theme';
import Header from './Header';
import ScrollTop from './ScrollTop';
import Books from '../containers/Books';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container maxWidth="xl">
      <Books />
    </Container>
    <ScrollTop>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>
  </ThemeProvider>
);

export default App;