import React from 'react';
import ScrollToTopButton from '../../ScrollToTopButton';

const PrivacyPolicy = () => {
    return (
        <div className="container">
            <ScrollToTopButton />
            <div className="col-md-10 col-lg-8 legal-policies">
                <h2>Política de Privacidad</h2>
                <hr className="mt-4 mb-5"/>
                <ol className="h3 my-4">
                    <li>
                        <h3>Objeto</h3>
                    </li>
                </ol>
                <p>
                    La presente política se aplica a todo tratamiento de datos personales que realice NFL Rookiepedia, y tiene el objetivo de informar al usuario respecto de la forma en que NFL Rookiepedia realiza el tratamiento de los datos personales (incluyendo detalle del tipo de datos personales recabados y la finalidad del tratamiento) y respecto de los derechos del usuario en relación a sus datos personales.
                </p>
                <ol start="2" className="h3 my-4">
                    <li>
                        <h3>Contacto - ¿Cómo puedo contactar?</h3>
                    </li>
                </ol>
                <p>
                    En caso de tener alguna consulta sobre la Política de Privacidad, el usuario puede contactarse con NFL Rookiepedia a través del siguiente email: <a href="mailto:davidbaquerogonzalez@gmail.com">davidbaquerogonzalez@gmail.com</a>
                </p>
                <p>
                    El usuario podrá establecer una comunicación directa y efectiva con NFL Rookiepedia mediante un correo electrónico a la dirección: <a href="mailto:davidbaquerogonzalez@gmail.com">davidbaquerogonzalez@gmail.com</a>
                    <br />
                    Asimismo, se dejan los datos del Responsable del Tratamiento de tus Datos Personales:
                </p>
                <ul>
                    <li><strong>Nombre comercial:</strong> NFL Rookiepedia</li>
                    <li><strong>Identidad del Responsable:</strong> David Baquero González</li>
                    <li><strong>Correo electrónico:</strong> <a href="mailto:davidbaquerogonzalez@gmail.com">davidbaquerogonzalez@gmail.com</a></li>
                </ul>
                <ol start="3" className="h3 my-4">
                    <li>
                        <h3>Identificación de tratamientos - ¿Cómo recolectamos los datos personales?</h3>
                    </li>
                </ol>
                <p>
                    En cumplimiento de la normativa vigente en materia de protección de datos de carácter personal, en especial:
                </p>
                <ul>
                    <li>
                        Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y la libre circulación de estos datos (en adelante, el "RGPD").
                    </li>
                    <li>La Ley General de Protección de Datos de Brasil, Ley N° 13.709, (la "LGPD").</li>
                    <li>Ley de Derechos de Privacidad de California de 2023 (CPRA).</li>
                    <li>La Ley de Protección de Datos del Consumidor de Virginia (VCDPA).</li>
                    <li>Legislación antispam de Canadá (CASL) y Ley de protección de información personal y documentos electrónicos (PIPEDA).</li>
                </ul>
                <p>
                    NFL Rookiepedia recolecta los datos personales en su poder cuando el usuario:
                </p>
                <ul>
                    <li>(i). Completa los formularios de <a href="https://www.nflrookiepedia.com">https://www.nflrookiepedia.com</a> ("Sitio");</li>
                    <li>(ii). Se suscribe al boletín de noticias (newsletter),</li>
                    <li>(iii). Responde a una encuesta o completa un formulario web;</li>
                    <li>(iv). Envía email o se comunica en forma telefónica, los que luego son cargados en los formularios correspondientes.</li>
                </ul>
                {/* Additional sections go here */}
            </div>
        </div>
    );
};

export default PrivacyPolicy;