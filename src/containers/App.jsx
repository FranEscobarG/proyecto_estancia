import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioInvitado from "../pages/InicioInvitado";
import InicioAdmin from "../pages/InicioAdmin";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InicioInvitado/>} />
                <Route path="/login" element={<Login/>} />

                {/* RUTAS PROTEGIDAS */}
                {/* <Route element={<ProtectedRoute/>}> */}
                    <Route path="/admin" element={<InicioAdmin/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                {/* </Route> */}
                
            </Routes>
        </BrowserRouter>
     );
}

export default App;