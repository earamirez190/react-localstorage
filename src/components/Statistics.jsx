import React, { useState } from 'react'

export const Statistics = () => {

  //Obtener copia de los registros
  const obtenerRegistros = () => {
    //Recupera lo que existe en el localStorage
    const datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  //Se inicializa la primera vez con el arreglo vacio
  const [ registroslogin ] = useState(obtenerRegistros());  


  function miEstadistica(opcion){
    var i=0;
    var resultado = 0;
    var miObjeto;

    if(opcion === 1){//Determina la cantidad de registros
      resultado = registroslogin.length;
    }else if(opcion === 2){//Determina la suma del precio registros
      for(i=0; i<registroslogin.length; i++){
        miObjeto = registroslogin[i];
        resultado += parseInt(miObjeto.precio);        
      }
    }else if(opcion === 3){//Determina el promedio
      for(i=0; i<registroslogin.length; i++){
        miObjeto = registroslogin[i];
        resultado += parseInt(miObjeto.precio);        
      }
      resultado = (resultado/registroslogin.length).toFixed(2);
    }

    return resultado;
  }


  return (
          
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Resumen Estadístico
    </div>
    <div className="table-responsive">    

        { registroslogin.length > 0 ? 

        <div className="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cantidad de Pinturas</h5>
                <p className="card-text"> { miEstadistica(1) } </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Suma de Precios</h5>
                <p className="card-text"> { miEstadistica(2) } </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Promedio de Precios</h5>
                <p className="card-text"> { miEstadistica(3) } </p>
              </div>
            </div>
          </div>
        </div>

        : <p className='h5' style={{color:"red"}}>"No hay registros para la estadistica"</p>

      }

    </div>
  </div>
  )
}
