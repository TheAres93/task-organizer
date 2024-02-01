import Form from "../src/components/Form";
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import Context from "../src/context/context";
import { useContext } from "react";
import IMGAddTasks from "../src/assets/AddTasks.png"

export default function AddTasks(){
    const {
        tasks
      } = useContext(Context);
    return (
        <Grid
          templateAreas={`"header"
                          "main"      
                          "footer"`}
          gridTemplateRows={'0.1fr 0.8fr 0.1fr'}
          gridTemplateColumns={'1fr'}
          justifyContent="center"
          alignContent="center"
          bgImage= {IMGAddTasks}
          bgPosition="center"
          bgSize="contain"
          bgRepeat="no-repeat"
          w="100%"
          h="100%"
          gap='2'
          templateColumns='1fr'
          >
            <GridItem area={'header'} justifySelf="center" alignSelf="center">
                <Heading>Agrega una tarea</Heading>
            </GridItem>
            <GridItem area={'main'} justifySelf="center" alignSelf="center">
              <Form action="AddTask"/>
            </GridItem>
            <GridItem area={'footer'} justifySelf="center" alignSelf="flex-start">
            <Heading as='h4' size='md'>
                {`Total de tareas guardadas: ${tasks.length}`}
            </Heading>
            </GridItem>
          
        </Grid>
      );
}