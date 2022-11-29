import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import { RoutesContents } from "./routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesContents />
    </BrowserRouter>
  );
}

export default App;
