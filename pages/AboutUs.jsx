import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import IMGAboutUS from "../src/assets/AboutUs.svg"

export default function AboutUs() {
  return (
    <Grid
      templateAreas={`"header"
                        "footer"`}
      w="100%"
      h="100%"
      gridTemplateColumns="auto"
      gridTemplateRows="auto"
      bgImage={IMGAboutUS}
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <GridItem area="header" alignSelf="end">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center">Olimpo Company</Heading>
        <Heading
          fontSize="2xl"
          textAlign="center">Creando aplicaciones para los dioses</Heading>
      </GridItem>
      <GridItem area="footer" alignSelf="center" justifySelf="center" w="60%">
        <Text
          fontSize="xl"
          textAlign="center">
          © Olimpo Company es una empresa que nace a mediados de 2023 con el objetivo de mostrar el maravilloso mundo
          de la programación. Creamos aplicaciones atractivas, diseñadas para una experiencia de usuario placentera.

          Somos una empresa creciente en este mundo cambiante. Nuestra primera entrega oficial, esta aplicación, se
          encarga de forma eficiente de las tareas que se requieren. Creemos que te encantará.

          Estamos comprometidos con la mejora continua. Agradecemos tus sugerencias para mejorar esta aplicación, así
          como también para construir más aplicaciones que sean funcionales e eficientes.
        </Text>
      </GridItem>
    </Grid>
  );
}
