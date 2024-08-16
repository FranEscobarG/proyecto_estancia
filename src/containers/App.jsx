import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioInvitado from "../pages/InicioInvitado";
import InicioAdmin from "../pages/InicioAdmin";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InicioInvitado/>} />
                {/* RUTAS PROTEGIDAS */}
                {/* <Route element={<ProtectedRoute/>}> */}
                    <Route path="/admin" element={<InicioAdmin/>} />
                {/* </Route> */}
                
            </Routes>
        </BrowserRouter>
     );
}

export default App;