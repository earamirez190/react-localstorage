import React, { useState, useEffect } from 'react'

export const List = () => {

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
  const [ registroslogin, setRegistrosLogin ] = useState(obtenerRegistros());


  const botonEliminar = (miIndex) => {
    if(window.confirm("¿Esta seguro de eliminar registro?")){
      //Recuepra todos los registros del localStorage omitiendo los que coninciden con el miIndex
      var regsitrosFiltrados = registroslogin.filter((e, index) => {
        return miIndex !== index;
      });
      setRegistrosLogin(regsitrosFiltrados);
    }
  }

  //Guardar en LocalStorage
  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] ); //Actualiza una unica vez
  
  return (
        
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro
    </div>
    <div className="table-responsive">     
    
      { registroslogin.length > 0 ? 

    <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Estilo</th>
                    <th>Tecnica</th>
                    <th>Precio</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                {
                  registroslogin.map((objetoRegistro, index) => (
                    <tr key={ index }>
                      <th>{ index+1 }</th>
                      <td>{ objetoRegistro.titulo }</td>
                      <td>{ objetoRegistro.estilo }</td>
                      <td>{ objetoRegistro.tecnica }</td>
                      <td>{ objetoRegistro.precio }</td>
                      <td className="text-center">
                        <button className="btn btn-outline-danger" onClick={ ()=>botonEliminar(index) }>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>    
      </> 
    
      : <p className='h5' style={{color:"red"}}>"No hay registros para listar"</p>

      }

    </div>
 
  </div>

  )
}
