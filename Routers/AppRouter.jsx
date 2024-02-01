import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import TasksList from "../pages/TasksList";
import AddTasks from "../pages/AddTasks";
import NotFound from "../pages/NotFound";

export default function AppRouter() {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/task-organizer/" element={<Home />} />
      <Route path="/task-organizer/AboutUs" element={<AboutUs />} />
      <Route path="/task-organizer/AddTasks" element={<AddTasks />} />
      <Route path="/task-organizer/TasksList">
        <Route index element={<TasksList action="All" />} />
        <Route path="/task-organizer/TasksList/Complete" element={<TasksList action="Complete" />} />
        <Route path="/task-organizer/TasksList/Incomplete" element={<TasksList action="Incomplete" />} />
        <Route path="/task-organizer/TasksList/EditOn" element={<TasksList action="EditOn" />} />
      </Route>
    </Routes>
  );
}
