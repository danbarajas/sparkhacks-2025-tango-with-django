import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tasks, ShowTasks, CreateTask, EditTask } from "@pages";

import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="tasks" element={<Tasks />}>
        <Route index element={<ShowTasks />} />
        <Route path="create" element={<CreateTask />} />
        <Route path="edit" element={<EditTask />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
