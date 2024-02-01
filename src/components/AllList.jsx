import React from 'react';
import { CardTask } from './CardTask';
import Context from '../context/context';
import { useContext } from 'react';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';

export default function AllList(props) {
  const { action } = props;
  const { tasks } = useContext(Context);

  const filteredCompleteTasks = tasks.filter((task) => task.state === true);
  const filteredIncompleteTasks = tasks.filter((task) => task.state === false);
  const filteredEditTasks = tasks.filter((task) => task.edit === true);

  const filteredTasks = () => {
    switch (action) {
      case 'Complete':
        return filteredCompleteTasks;
      case 'Incomplete':
        return filteredIncompleteTasks;
      case 'EditOn':
        return filteredEditTasks;
      default:
        return tasks;
    }
  };

  return (
      <Wrap gap={4} mt={10}>
        {filteredTasks().map((task) => (
          <WrapItem key={task.id}>
            <Center p={2} borderWidth={1} borderRadius={4}>
              <CardTask task={task} />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
  );
}
