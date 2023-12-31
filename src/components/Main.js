import React from "react";
import '../sass/index.scss';

export default function Main() {
   return (
      <main className="Container">
         <div className="Dropdown" id="Dropdown">
            <div className="Title-Cointainre">
               <h3 className="TitleDropdown">
                  M U J E R
               </h3>
               <a className="link" href="">Ver todo</a>
            </div>
            <ul className="ContentDropdown">
               <li><a className="link">Camisas</a></li>
               <li><a className="link">Camisetas</a></li>
               <li><a className="link">Pijamas</a></li>
               <li><a className="link">Ropa interior</a></li>
               <li><a className="link">Chaquetas y Buzos</a></li>
               <li><a className="link">Joggers pantalones</a></li>
               <li><a className="link">Calzado</a></li>
               <li><a className="link">Accesorios</a></li>
            </ul>
         </div>
      </main>
   )
}