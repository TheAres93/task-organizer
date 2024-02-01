import { Grid, Text, Img, Center, Link } from "@chakra-ui/react";
import IMGLogo from "../src/assets/Logo.svg"

export default function Footer(){
    return(
        <Grid>
        <Text textAlign="center" fontWeight='bold'>© 2023 - OLIMPO COMPANY - Powered by{" "}
            <Link href='https://www.instagram.com/ldmc.dev/' isExternal>
                The_Ares
            </Link>
        </Text>
        <Center>
        <Img src={IMGLogo} height="40px" color="gray"/>
        </Center>
        <Text textAlign="center">
        © Olimpo Company realiza una reserva expresa de los derechos de autor sobre las obras y
        otras prestaciones accesibles desde este sitio web, en virtud del artículo 25 de la
        Ley de Propiedad Intelectual de Venezuela.</Text>
        </Grid>
    )
}