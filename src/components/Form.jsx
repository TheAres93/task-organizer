import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '../context/context';
import { useToast, Input, Button, Grid, GridItem, Textarea, Text  } from '@chakra-ui/react'


export default function Form(props) {
  const toast = useToast()
  const {action, id, titulo, descripcion} = props

    const [titleTask, setTitleTask] = useState("");
    const [descriptionTask, setDescriptionTask] = useState("");
    const [updateTitleTask, setUpdateTitleTask] = useState("");
    const [updateDescriptionTask, setUpdateDescriptionTask] = useState(descripcion);
    const [formValidation, setFormValidation] = useState({
        title: "Debes escribir un titulo."
    });

  const {
    AddTask,
    EditTask
  } = useContext(Context);


  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isValid()) {
      switch (action) {
        case 'AddTask':
          setTitleTask("");
          setDescriptionTask("");
          setFormValidation({
            ...formValidation,
            title: "Debes escribir un titulo."
          });
          AddTask(titleTask, descriptionTask);
          toast({
            title: "Tarea Agregada.",
            description: "Tu tarea ha sido agregada exitosamente.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          break;
        case 'EditTask':
          setUpdateTitleTask("");
          setUpdateDescriptionTask("");
          setFormValidation({
            ...formValidation,
            title: "Debes escribir un titulo."
          });
          EditTask(id, updateTitleTask, updateDescriptionTask);
          toast({
            title: "Tarea Editada.",
            description: "Tu tarea ha sido actualizada con exito.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          break;
        default:
          break;
      }
    } else {
      toast({
        title:"Error",
        description: `${formValidation.title}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  function isValid() {
    return Object.keys(formValidation).every(
      (key) => formValidation[key] === true
    );
  }

  function handleTitleValidation(event) {
    const value = event.target.value;

    if (value.trim().length === 0) {
      setFormValidation({
        ...formValidation,
        title: 'El título es requerido.'
      });
    } else if (value.trim().length < 3) {
      setFormValidation({
        ...formValidation,
        title: 'El título debe tener más de 2 caracteres.'
      });
    } else {
      setFormValidation({
        ...formValidation,
        title: true
      });
    }
    if(action === 'AddTask'){
      setTitleTask(value);
    } else{
      setUpdateTitleTask(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        templateColumns="1fr"
        templateRows="20% 8% 50% 22%"
        gap={2}
        justifyItems="center"
        alignItems="center"
      >
        <GridItem>
          <Input variant='filled'
            type='text'
            placeholder={action === 'AddTask' ? 'Título de la tarea' : `Anterior: ${titulo}`}
            value={action === 'AddTask' ? titleTask : updateTitleTask}
            onChange={handleTitleValidation}
            onKeyDown={handleKeyDown}
            disabled={!isValid}
          />
        </GridItem>
        <GridItem color="red" textAlign="center">{formValidation.title && <Text>{formValidation.title}</Text>}</GridItem>
        <Textarea 
          placeholder={action === 'AddTask' ? 'Descripción de la tarea' : `Anterior: ${descripcion}`}
          value={action === 'AddTask' ? descriptionTask : updateDescriptionTask}
          onChange={action === 'AddTask' ?
          (event) => setDescriptionTask(event.target.value) 
          : (event) => setUpdateDescriptionTask(event.target.value) }
          onKeyDown={handleKeyDown}
          rows={4}
        />
        {action === 'AddTask' ? 
        <Button
        onClick={handleSubmit}
        colorScheme='gray'
        cursor='pointer'
        >
          Agregar Tarea
        </Button>
        :
          <Button
          cursor='pointer'
          colorScheme='gray'
          onClick={handleSubmit}
        >
          Editar Tarea
        </Button>}
      </Grid>
    </form>
  );
}