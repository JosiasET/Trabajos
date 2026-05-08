import React, { useState } from "react";
import './carrucelE.css'
import imag1 from "../../assets/images/imagen1.jpg";
import imag2 from "../../assets/images/imagen2.jpeg";
import imag3 from "../../assets/images/imagen3.jpeg";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function CarrucelE() {
  const [fotoP, setfotop] = useState(0);
  const Fotos = [
    {
      id:1,
      url: imag1,
      alt: "Imagen 1"
    },
    {
      id:2,
      url: imag2,
      alt: "Imagen 2"
    },
    {
      id:3,
      url: imag3,
      alt: "Imagen 3"
    }
  ];

  const Izquierda = () => {
    if (fotoP === 0) {
      setfotop(Fotos.length - 1);
    } else {
      setfotop(fotoP - 1);
    }
  };

  const Derecha = () => {
    if (fotoP === Fotos.length - 1) {
      setfotop(0);
    } else {
      setfotop(fotoP + 1);
    }
  };

  return (
    <div className="contenedor">
      <div className="carrusel">
        <div className="carrusel-tira" style={{ transform: `translateX(-${fotoP * 100}%)` }}>
          {Fotos.map((emp, index) => {
            return (
              <div key={index} className="con-image">
                <img src={emp.url} className="foto"/>
              </div>
            );
          })}
        </div>

        <button className="btn" onClick={Izquierda}><GoArrowLeft /></button>
        <button className="btn" onClick={Derecha}><GoArrowRight /></button>
      </div>


      <div className="contenedores-brn">
        {Fotos.map((emp, index)=>{
          return(
            <button key={index} className={fotoP===index ? 'pun' : 'btn'}  onClick={()=>setfotop(index)} >
            
            </button> 
          )
        })}

      </div>
    </div>
  );
}
