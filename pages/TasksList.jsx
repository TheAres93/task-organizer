import ListMenu from "../Routers/ListMenu";
import { Heading, Grid, GridItem, Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure } from '@chakra-ui/react';
import AllList from "../src/components/AllList";
import React, { useContext } from "react";
import Context from "../src/context/context";
import Theme from "../src/theme/Theme";
import IMGHome from "../src/assets/Home.svg"

export default function TasksList(props){
    const {action} = props
    const {DeleteAllTasks, tasks } = useContext(Context);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

      
    return(
        <Grid
            templateAreas={`"header"
                            "main"      
                            "footer"
                            "borrar"`}
            gridTemplateRows={'0.1fr 0.1fr 0.7fr 0.1fr'}
            gridTemplateColumns={'1fr'}
            gap='2'
            theme={Theme}
            bgImage= {IMGHome}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="no-repeat"
            w="100%"
            h="100%"
        >
            <GridItem area={'header'} justifySelf="center" alignSelf="center">
                <nav>
                    <ListMenu/>
                </nav>
            </GridItem>
            <GridItem area={'main'} justifySelf="center" alignSelf="center" paddingTop="30px">
                {action === "All" ? <Heading>Lista de tareas:</Heading>
                : action === "Complete" ? <Heading>Tareas completadas:</Heading>
                :  action === "Incomplete" ?<Heading>Tareas pendientes:</Heading>
                :<Heading>Tareas por editar:</Heading>}
            </GridItem>
            <GridItem area={'footer'} paddingLeft="40px">
                <AllList action={action} />
            </GridItem>
            <GridItem area={'borrar'} justifySelf="center" alignContent="center" paddingTop="50px">
                <Button
                cursor='pointer'
                colorScheme='gray'
                size='md'
                leftIcon={<span className='material-symbols-outlined'>delete</span>}
                onClick={onOpen}>
                    Borrar todas las tareas
                </Button>

                { isOpen === true && <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  motionPreset='slideInBottom'
                  isCentered
                >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader >Borrar tareas</AlertDialogHeader>
                  <AlertDialogBody>
                    {`¿Realmente quieres borrar la(s) ${tasks.length} tarea(s)?`}
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Mejor no
                    </Button>
                    <Button colorScheme='red' ml={3}
                    onClick={() => {
                      DeleteAllTasks();
                      onClose();
                    }}>
                      Estoy seguro
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>}

            </GridItem>
        </Grid>
            
    )
}
