import { Grid,  Heading } from '@chakra-ui/react'
import GeneralMenu from '../Routers/GeneralMenu';
import ChangeTheme from '../src/theme/ChangeTheme';

export default function Header(){

  
    return (
      <Grid 
        w="100%"
        h="100%"
        gridTemplateColumns={'repeat(3,1fr)'}
        justifyContent="space-between" alignItems="center"
        paddingTop="10px">
        <Heading size='lg'paddingLeft="50px">Organizador de tareas</Heading>
        <GeneralMenu/>
        <ChangeTheme/>
      </Grid>
    );
  }