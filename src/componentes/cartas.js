import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hoja-de-estilo/catas.css';

function Carta (props) {
 return (
  <div className="prinsipal">
   <img className="imagen" src={require(`../imagenes/ds-${props.imagen}.jpg`)}/>
    <div className="info">
     <p><strong>{props.informasion}</strong></p>
    </div>
  </div>
 );
}
export default Carta;