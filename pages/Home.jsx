import { Link } from 'react-router-dom';
import { Button, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react'
import Theme from "../src/theme/Theme";
import IMGTasksList from "../src/assets/TasksList.svg"
export default function Home(){
    const {colorMode}=useColorMode()
    return (
        <Grid 
            bgImage= {IMGTasksList}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="repeat"
            w="100%"
            h="100%"
            theme={Theme}
        >
            <Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='bold'
                textAlign="center"
                paddingTop="30px">Bienvenido a tu organizador de tareas</Text>
            <GridItem alignSelf="center" justifySelf="center" w="60%">
                <Text fontSize='2xl' textAlign="center">

                Esta aplicación fue creada con React JS y el framework de Chakra UI para su interfaz de usuario. También utiliza el poderoso motor de JavaScript para su parte funcional.

                Está diseñada para ayudarte en tu día a día, para que no se te pase ningún pendiente. Recordar es nuestra tarea.
                <br />
                En cada tarea, podrás observar la fecha de creación y finalización de la misma al completarse. También puedes filtrar por completadas, pendientes, editando o verlas todas.
                </Text>
                <br />
                <br />
                <Text fontSize='2xl' textAlign="center">
                ¿Qué estás esperando? 
                </Text>
            </GridItem>
            <GridItem justifySelf="center">
                <nav>
                    <Button colorScheme='gray'size='lg'
                        color={colorMode==="light"?"black":"white"}><Link to="/task-organizer/AddTasks">¡Comencemos a organizar!</Link></Button>
                </nav>
            </GridItem>
            
        </Grid>
    )
}