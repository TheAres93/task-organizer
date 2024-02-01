import React, { useContext } from "react";
import Context from "../context/context";
import Form from "./Form";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Center, Grid, GridItem, Text, useDisclosure } from '@chakra-ui/react'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export function CardTask(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const {
    CompleteTask,
    DeleteTask,
    InputOn,
  } = useContext(Context);
  const { task } = props;

 function renderTask(task) {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
          <AccordionButton _expanded={task.state ? { bg: 'green', color: 'white' }:{ bg: 'red', color: 'white' }}>
              <Box as="span" flex="1" textAlign="left">
                {task.edit ? "Editando tarea" : task.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel   >
            {task.edit ? (
              <Form
                action="EditTask"
                id={task.id}
                titulo={task.title}
                descripcion={task.description}
              />
            ) : !task.state ? (
              <Text textAlign="center">
                {task.description}
                <br/>
                {`Creada: ${task.created}`}
              </Text>
            ) : (
              <Text style={{ textDecoration: "line-through" }} textAlign="center">
                {task.description}
                <br/>
                {`Creada: ${task.created}`}
                <br/>
                {`Realizada: ${task.finished}`}
              </Text>
            )}
            {task.edit === false && (
              <Center>
                <Button
                  colorScheme="ghost"
                  color="lightblue"
                  cursor="pointer"
                  onClick={() => InputOn(task.id)}
                >
                  <span className="material-symbols-outlined">edit</span>
                </Button>
              </Center>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
 

 return (
  <Grid 
    templateColumns='20px 200px 20px'
    gap={6} 
    alignItems="center" 
    justifyItems="center"
  >
    <GridItem>
    {task.edit === false ? (
      <Button
        colorScheme="ghost"
        color={task.state ? "green" : "red"}
        cursor="pointer"
        onClick={() => CompleteTask(task.id)}
      >
        <span className={`material-symbols-outlined ${task.state ? "check_circle" : "radio_Button_unchecked"}`}>
          {task.state ? "check_circle" : "radio_Button_unchecked"}
        </span>
      </Button>
    ) : (
      <div></div>
    )}
    </GridItem>
    <GridItem justifyContent="center" alignContent="center">{renderTask(task)}</GridItem>
    <GridItem>
            {task.edit === false ?<Button
                colorScheme="ghost"
                color="brown"
                cursor="pointer"
                onClick={onOpen}
              >
                <span className="material-symbols-outlined">
                  backspace
                </span>
              </Button>:<Button
                colorScheme="ghost"
                color="brown"
                cursor="pointer"
                onClick={()=>
                  InputOn(task.id)}
              >
                <span className="material-symbols-outlined">
                  cancel
                </span>
              </Button>}
    </GridItem>
            {isOpen === true && <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader>Borrar tareas</AlertDialogHeader>
                  <AlertDialogBody>
                    {`¿Realmente quieres borrar la tarea "${task.title}"  ?`}
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Mejor no
                    </Button>
                    <Button colorScheme='red' ml={3}
                    onClick={() => {
                      DeleteTask(task.id);
                      onClose();
                    }}>
                      Estoy seguro
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>}
  </Grid>
  );
}
