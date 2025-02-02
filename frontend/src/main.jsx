import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Tasks} from "@pages";

import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="tasks" element={<Tasks />}/>
    </Routes>
  </BrowserRouter>
);
