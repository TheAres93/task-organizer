import React from 'react'
import Context from './context'
import useOrganizer from '../hooks/useOrganizer';

export default function ContextProvider({children}) {
    const {
      AddTask,
      CompleteTask,
      EditTask,
      DeleteTask,
      InputOn,
      DeleteAllTasks,
      tasks,
      } = useOrganizer();
     


  return (
    <Context.Provider value={{
      AddTask,
      CompleteTask,
      EditTask,
      DeleteTask,
      InputOn,
      DeleteAllTasks,
      tasks,
      }}>
        {children}
    </Context.Provider>
  )
}