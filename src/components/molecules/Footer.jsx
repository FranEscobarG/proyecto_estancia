import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/logoICTI-blanco.png'
import '../../assets/css/footer.css'

function Footer() {
    return ( 
        <footer className="container-footer">
            <div className="row-footer">
                <div className="column-footer">
                    <img src={Logo} alt="Logo" className="logo-footer" />
                </div>

                <div className="column-footer about">
                    <h4>Acerca del Instituto</h4>
                    <ul>
                        <li><a href="https://icti.chiapas.gob.mx/conocenos"><FontAwesomeIcon icon={faAngleRight} /> Conócenos</a></li>
                        <li><a href="https://www.chiapas.gob.mx/funcionarios/estatal/ejecutivo/icti"><FontAwesomeIcon icon={faAngleRight} /> Directorio de Funcionarios</a></li>
                    </ul>
                </div>
        
                <div className="column-footer contacts">
                    <h4>Contactanos</h4>
                    <ul>
                        <li>Conmutador: 9616914020 Ext 67624 Teléfono: (961) 63 92519, 63 92564, 63 92731</li>
                        <li>Correo: uinformatica@icti.chiapas.gob.mx</li>
                    </ul>
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