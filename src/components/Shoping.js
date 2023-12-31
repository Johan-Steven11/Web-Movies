import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Shoping() {
        return (
                <div>
                        <div className="content-shoping">
                                <button className="btnquantity">-</button>
                                <div className="quantity">
                                        1
                                </div>
                                <button className="btnquantity">+</button>
                                <button className="addShoping">Agregar a mi bolsa</button>
                        </div>
                        <form>
                                <h4>Comprueba disponibilidad de entrega</h4>
                                <select className="inputZone">
                                        <option>Departamento</option>
                                </select>
                                <select className="inputZone">
                                        <option>Municipio</option>
                                </select>
                                <button className="Check">COMPROBAR DISPONIBILIDAD </button>
                                <select className="inputZone">
                                        <option>Descripción de producto</option>
                                </select>
                                <select className="inputZone">
                                        <option>Especificaciones </option>
                                </select>
                                <select className="inputZone">
                                        <option>Composición</option>
                                </select>
                                <select className="inputZone">
                                        <option>Cuidados</option>
                                </select>
                                <select className="inputZone">
                                        <option>Descubre mas</option>
                                </select>

                                <button className="favorite"> <FontAwesomeIcon icon={faHeart} /> Agregar a favoritos</button>

                                <div>
                                        <div className="credit-info">
                                                <div>
                                                <button className="Credibtn">Credifin</button>
                                                </div>
                                                <div>
                                                <p>Compra ahora y págalo hasta en 6 cuotas con credifin. <br/>
                                                Solicita tu crédito aquí.
                                                </p>
                                                </div>
                                        </div>
                                </div>
                        </form>
                </div>
        );
}