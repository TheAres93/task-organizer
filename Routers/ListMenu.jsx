import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react'
import Theme from '../src/theme/Theme';
export default function ListMenu() {
  return (
    <nav>
      <ButtonGroup gap='6' theme={Theme}>
        <Button colorScheme='gray'>
          <Link to="/task-organizer/TasksList">Todas</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/task-organizer/TasksList/Complete">Completadas</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/task-organizer/TasksList/Incomplete">Pendientes</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/task-organizer/TasksList/EditOn">Editando</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}

