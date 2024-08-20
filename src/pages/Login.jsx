import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import ContainerLogin from "../components/organism/ContainerLogin";

function Login() {
    return ( 
        <div>
            <Navbar/>
            <ContainerLogin/>
            <Footer/>
        </div>
     );
}

export default Login;