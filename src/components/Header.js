import React from "react";
import '../sass/index.scss';
import Navar from '../components/navar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSnowflake} from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <header className="navar">
            <div className="content-icons">
                <div className="snowicon">
                    <h1> <FontAwesomeIcon icon={faSnowflake} className="snowflakeicon" /></h1>
                </div>
                <h1><samp className="HO1">HO</samp><spam className="HO2">HO </spam><samp className="Holiday">HOLIDAYS</samp></h1>
                <p>1 PRENDA <spam className="Descont">20%</spam></p>
                <p>2 PRENDAS <spam className="Descont2">25%</spam> </p>
                <p>3 O MAS PRENDAS<spam className="Descont">30%</spam> </p>
                <h1><FontAwesomeIcon icon={faSnowflake} className="snowflakeiconend" /></h1>
            </div>
            <Navar/>
        </header>

    )
}