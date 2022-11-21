import { Route, Routes } from "react-router-dom";
import EquipoPage from "./pages/EquipoPage";
import EquipoForm from "./pages/EquipoForm";
import NotFound from "./pages/NotFound";
import { EquipoContextProvider } from "./context/EquipoProvider";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <NavBar />
      <div className="container mx-auto py-5 px-10">
        <EquipoContextProvider>
          <Routes>
            <Route path="/" element={<EquipoPage></EquipoPage>} />
            <Route path="/new" element={<EquipoForm></EquipoForm>} />
            <Route path="/edit/:id" element={<EquipoForm></EquipoForm>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </EquipoContextProvider>
      </div>
    </div>
  );
}

export default App;
