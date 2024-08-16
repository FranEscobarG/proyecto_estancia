import Logo from '../../assets/img/logo-ICTI_Chiapas.svg'
import '../../assets/css/footer.css'

function Footer() {
    return ( 
        <footer className="container-footer">
            <div className="row-footer">
                <div className="column-footer">
                    <img src={Logo} alt="Logo" className="logo-footer" />
                </div>

                <div className="column-footer about">
                    <h4>Sobre nosotros</h4>
                    <p>Somos una empresa mexicana, desarrolladora de software, que día a día busca innovar en este mercado para garantizar tu seguridad.</p>
                    {/* <span>Proyecto Hackathon 2023</span> */}
                </div>
        
                <div className="column-footer social-container">
                    <h4>Siguenos</h4>
                    <div>
                    
                    </div>
                </div>
            </div>
            
            <div className="info_bottom">
                <div className="column-footer">
                    Instituto de ciencia, tecnologia e innovacion
                </div>

                <div className="column-footer">
                    Museo chiapas de ciencia y tecnología
                </div>
        
                <div className="column-footer">
                    Unidad de informatica
                </div>
            </div>
      </footer>
     );
}

export default Footer;