import React from 'react';
import ScrollToTopButton from '../../ScrollToTopButton';

const CookiesPolicy = () => {
    return (
        <div className="container">
            <ScrollToTopButton />
            <div className="col-md-10 col-lg-8 legal-policies">
                <h2>Política de Cookies</h2>
                <hr className="mt-4 mb-5"/>
                <h4 className="my-4">Información sobre nuestro uso de cookies.</h4>
                <p>
                    Este sitio web <a href="https://www.nflrookiepedia.com">https://www.nflrookiepedia.com</a> utiliza cookies para proporcionar a los usuarios una buena experiencia cuando navegan por nuestro sitio web y también nos permite mejorar nuestro sitio.
                </p>
                <h4 className="my-4">¿Qué es una cookie?</h4>
                <p>
                    Una cookie es un pequeño archivo de letras y números que almacenamos en el navegador del usuario o en el disco duro de su computadora si están de acuerdo. Las cookies contienen información que se transfiere al disco duro de la computadora del usuario.
                </p>
                <h4 className="my-4">Clasificación de cookies e información de su uso.</h4>
                <p>
                    Realizamos análisis de cookies en nuestro sitio web de forma regular y mantenemos nuestra lista de cookies actualizada. Clasificamos las cookies en cuatro categorías:
                </p>
                <ul>
                    <li>
                        <p>
                            <strong>Cookies necesarias:</strong> Son cookies necesarias para el funcionamiento de nuestro sitio web. Incluyen, por ejemplo, cookies que permiten a los visitantes del sitio web iniciar sesión en áreas seguras de nuestro sitio web.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Cookies analíticas:</strong> Nos permiten reconocer y contar el número de visitantes y ver cómo los visitantes se mueven por nuestro sitio web cuando lo utilizan. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio web, por ejemplo, al garantizar que los usuarios encuentren lo que buscan fácilmente.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Cookies de preferencias:</strong> Se utilizan para reconocer a los usuarios cuando regresan a nuestro sitio web. Esto nos permite personalizar nuestro contenido para ellos y recordar sus preferencias (por ejemplo, su elección de idioma o región).
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Cookies de marketing:</strong> Estas cookies registran las visitas de los usuarios a nuestro sitio web, las páginas que han visitado y los enlaces que han seguido. Usaremos esta información para hacer que nuestro sitio web y la publicidad que se muestra en él sean más relevantes para los intereses de los visitantes de nuestro sitio web.
                        </p>
                    </li>
                </ul>
                <p>
                    Dependiendo de la ubicación del usuario, este podrá optar por no participar en cada categoría de cookies (excepto las cookies necesarias) haciendo clic en "Configurar cookies" en el banner de cookies de nuestro sitio web.
                </p>
            </div>
        </div>
    );
};

export default CookiesPolicy;