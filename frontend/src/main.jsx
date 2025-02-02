import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tasks, DisplayTasks, CreateTask, EditTask } from "@pages";

import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="tasks" element={<Tasks />}>
        <Route index element={<DisplayTasks />} />
        <Route path="create" element={<CreateTask />} />
        <Route path="edit/:id" element={<EditTask />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
