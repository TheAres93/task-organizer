import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../Routers/AppRouter';
import * as React from 'react';
import ContextProvider from './context/contextProvider';
import { Grid, GridItem } from '@chakra-ui/react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

export default function App() {
  return (
      <BrowserRouter>
        <ContextProvider>
          <Grid
            templateAreas={`"header"
                          "main"
                          "footer"`}
            w="100vw"
            h="100vh"
            gridTemplateColumns={'100%'}
            gridTemplateRows={'auto 1fr auto'}
            gap="1"
            bgGradient=""
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="contain"
          >
            <GridItem area="header">
              <Header />
            </GridItem>

            <GridItem area="main" paddingTop="20px">
              <AppRouter />
            </GridItem>

            <GridItem area="footer">
              <Footer />
            </GridItem>
          </Grid>
        </ContextProvider>
      </BrowserRouter>
  );
}
