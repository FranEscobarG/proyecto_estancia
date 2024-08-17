import "../../assets/css/inicio.css";

function ContentInicio() {
  return (
    <div className="content-inicio">
      <div className="cover"></div>
      <div className="main">
        <div className="container-info">
          <h1>Sistema de Servicios y Soporte de la Unidad de Informatica</h1>
          <h2>Bienvenido al Sistema de Gestión de Incidencias Tecnológicas</h2>
          <p className="description">
            Esta plataforma ha sido desarrollada para facilitar la comunicación
            entre las diferentes áreas de la institución y el departamento de
            informática. Aquí podrás reportar cualquier incidente técnico o
            necesidad de soporte, y nuestro equipo de informática se encargará
            de atenderlo de manera eficiente. Además, podrás seguir el estado de
            tu solicitud en tiempo real.
          </p>

          <section id="how-it-works">
            <h2>Cómo Funciona</h2>
            <ol>
              <li>
                <strong>Crear un Reporte:</strong> Las áreas de la institución
                pueden crear un reporte describiendo el problema que necesitan
                que el área de informática atienda.
              </li>
              <li>
                <strong>Revisión del Reporte:</strong> El equipo de informática
                revisa el reporte y asigna un técnico para resolver el problema.
              </li>
              <li>
                <strong>Solución y Documentación:</strong> Una vez resuelto el
                problema, en el sistema se generará un documento PDF con todos los
                detalles de la solución, como reporte del servicio.
              </li>
            </ol>
          </section>

          <section id="benefits">
            <h2>Beneficios del Sistema</h2>
            <ul>
              <li>
                <strong>Eficiencia:</strong> Reducción en los tiempos de
                respuesta para la atención de incidencias.
              </li>
              <li>
                <strong>Seguimiento:</strong> Monitoreo del estado de las
                solicitudes en tiempo real.
              </li>
              {/* <li>
                <strong>Documentación:</strong> Generación automática de
                reportes detallados una vez solucionada la incidencia.
              </li> */}
              <li>
                <strong>Accesibilidad:</strong> Sistema disponible en cualquier
                momento para realizar reportes desde cualquier dispositivo.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

export default ContentInicio;
