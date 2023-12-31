import React from "react";
import '../sass/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/Main';
import { faBagShopping, faHeart, faLocationPin, faMessage, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
export default function navar() {
    const HidenDropdown = () => {
        const Dropdown = document.getElementById("Dropdown");
        const style = window.getComputedStyle(Dropdown);
        if (style.getPropertyValue('display') === 'none') {
            document.getElementById("Dropdown").style.display = 'block';
        } else {
            document.getElementById("Dropdown").style.display = 'none';
        }
    }
    return (
        <nav>
            <div className="content-navar">
                <div className="Title-content">
                    <h2 className="title-text">Movies</h2>

                </div>
                <ul className="list-buttons">
                    <li>
                        <button className="buttons" id="btnMujer" onClick={HidenDropdown}>M U J E R</button>
                    </li>
                    <li>
                        <button className="buttons">H O M B R E S</button>
                    </li>
                    <li>
                        <button className="buttons">N U E V O S <br></br><span>lanzamientos</span></button>
                    </li>
                    <li>
                        <button className="buttons"><span className="letterRed">R O P A</span><br />deportiva</button>
                    </li>
                    <li>
                        <button className="buttons">H O L Y D A Y S S A L E 🎁<br />toda la tienda</button>
                    </li>
                    <li>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input type="text" placeholder=" Encuentra tu preferido" className="Search" />
                        </div>
                    </li>
                    <li>
                        <div className="ConterButtons-profiles">
                            <button className="buttons-profiles">
                                <FontAwesomeIcon icon={faMessage} className="icons" />
                            </button>

                            <button className="buttons-profiles">
                                <FontAwesomeIcon icon={faUser} className="icons" />
                            </button>
                            <button className="buttons-profiles">
                                <FontAwesomeIcon icon={faHeart} className="icons" />
                            </button>
                            <button className="buttons-profiles">
                                <FontAwesomeIcon icon={faLocationPin} className="icons" />
                            </button>
                            <button className="buttons-profiles">
                                <FontAwesomeIcon icon={faBagShopping} className="icons" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

