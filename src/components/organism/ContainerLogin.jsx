import Banner from "../atoms/Banner";
import FormLogin from "../molecules/FormLogin";
import '../../assets/css/login.css'

function ContainerLogin() {
    return ( 
        <div className="container-login">
            <Banner/>
            <FormLogin/>
        </div>
     );
}

export default ContainerLogin;