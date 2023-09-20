import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduction } from "./Introduction";


function App() {
  return (
    <div className=" w-full h-fit">

    <BrowserRouter>
      <Routes>

        <Route index element={<Introduction />} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
