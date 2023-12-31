import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../sass/index.scss';
import { faArrowRotateBack, faBox, faPhone, faShield, faTruck, faEnvelope,faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer>
            <div className="content-footer">
                <div className="contene-services">
                    <ul className="list-services">
                        <li>
                            <p> <FontAwesomeIcon icon={faShield} /> Pagos <br /> Seguros</p>
                        </li>
                        <li>
                            <p> <FontAwesomeIcon icon={faTruck} /> Envio a todo <br /> El pais</p>
                        </li>
                        <li>
                            <p> <FontAwesomeIcon icon={faPhone} /> Atencion al<br /> Cliente</p>
                        </li>
                        <li>
                            <p> <FontAwesomeIcon icon={faArrowRotateBack} /> Devoluciones<br /> Gratuitas</p>
                        </li>
                        <li>
                            <p> <FontAwesomeIcon icon={faBox} /> Seguimiento<br /> de pedido</p>
                        </li>
                    </ul>
                </div>
                <div className="Subscription">
                    <div className="Container-Sub">
                        <h2>
                            LA HISTORIA CONTINÚA
                        </h2>
                        <p>
                            SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES ¡Recibe un 15% OFF<br /> EN TU PRIMERA COMPRA!
                        </p>
                        <from className="MenuSub">
                            <input type="texto" placeholder="Nombre y apellidos"></input>
                            <input type="email" placeholder="Correo electronico"></input>
                            <input type="texto" placeholder="Celular"></input>
                            <input type="texto" placeholder="Numero de docuemnto"></input>
                            <p className="text">
                                Te interesan productos para
                            </p>
                            <div className="sexo">
                                <input type="checkbox" className="check"></input><p>Mujer</p>
                                <input type="checkbox" className="check"></input><p>Hombre</p>
                            </div>
                            <div className="suscribe">
                                <input type="checkbox"></input><p>
                                    Aceptas términos de datos personales y Términos y Condiciones
                                </p>
                                <button>SUSCRIBIRME </button>
                            </div>
                        </from>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="secction">
                        <h3>SÍGUENOS</h3><br />
                        <p><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></p>

                        <h3>CONTACTOS</h3>
                        <div className="contacts">
                            <ul className="contact-list">
                                <li>
                                <p><FontAwesomeIcon icon={faEnvelope} /> servicioalcliente@movishop.co</p><br />
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faPhone}/> +57 300 910 8311</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faLocationPin}/> NUESTRAS TIENDAS  </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="secction">
                        <h3>TE AYUDAMOS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam ut similique laboriosam deleniti. Voluptatem ipsum vel ullam, velit asperiores, et accusantium maiores dignissimos distinctio aut commodi nisi adipisci veniam!</p>

                    </div>
                    <div className="secction"> <h3>INFORMACIÓN LEGAL</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam ut similique laboriosam deleniti. Voluptatem ipsum vel ullam, velit asperiores, et accusantium maiores dignissimos distinctio aut commodi nisi adipisci veniam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam obcaecati, reiciendis veniam adipisci animi tempore cupiditate, perferendis tenetur iusto qui deserunt numquam ex unde incidunt eveniet molestiae voluptatibus harum.</p></div>
                    <div className="secction">
                    <h3>MI CUENTA</h3>
                    <p>Iniciar secction</p><br/>
                    <p>Rastrear pedido</p>
                    </div>
                    <div className="secction">
                    <h3>ACERCA DE MOVIES </h3>
                    <p>Nuestra Historia </p><br/>
                    <p>Trabaja con nostros</p>
                    </div>
                </div>
                <div className="end">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione atque quae iure commodi nihil delectus consequuntur libero, eius amet facere dolore, facilis non ea ipsa earum, nesciunt neque laboriosam perferendis!
                </div>
            </div>
        </footer>
    )
}