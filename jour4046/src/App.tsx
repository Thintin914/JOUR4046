import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduction } from "./Introduction";
import { Transitioner } from "./Transitioner";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";


function App() {
  return (
    <div className=" relative w-full h-fit">

    <BrowserRouter>

      <Transitioner />

      <Routes>

        <Route index element={<Introduction />} />
        <Route path="/slide2" element={<Slide2 />} />
        <Route path="/slide3" element={<Slide3 />} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
