import Caption from "../atoms/Caption";
import Title from "../atoms/Titles";
import WrapperInput from "./WrapperInput";

function FormLogin() {
    return ( 
        <div className="box-login">
            <form action="" className="form-login">
                <Title text={"Inicio de Sesión"} />
                <Caption text={"Inicia sesión para que puedas reportar tu problema."} />
                <WrapperInput label={"Usuario:"} inputType={"text"} inputName={"user"} />
                <WrapperInput label={"Contraseña"} inputType={"password"} inputName={"password"} />
                <button className="btn-login">Iniciar Sesión</button>
            </form>
        </div>
     );
}

export default FormLogin;