import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduction } from "./Introduction";
import { Transitioner } from "./Transitioner";


function App() {
  return (
    <div id="app" className=" relative w-full h-fit">

    <BrowserRouter>

      <Transitioner />

      <Routes>

        <Route index element={<Introduction />} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
