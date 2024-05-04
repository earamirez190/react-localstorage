import React, { useState, useEffect } from 'react'

export const Register = () => {


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

  //Contolan los campos
  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");


  //Captura los elementos asociados a los campos de ingreso
  const botonGuardar = (e) => {
    e.preventDefault();
    var objetoRegistro = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, objetoRegistro]);
    limpiarFormulario();
  }

  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setPrecio("");
    setTecnica("");
    document.getElementById("miFormulario").reset();
  }

  //Guardar en LocalStorage
  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] ); //Actualiza una unica vez




  return (
    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Formulario De Registro
      <br/>
      <form id="miFormulario" onSubmit={ botonGuardar }  >
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Digite El Título" onChange={(e)=> setTitulo(e.target.value)} required  />
          </div>

          <div className="col-6">
            <select className="form-select form-select-lg text-center" onChange={(e)=> setEstilo(e.target.value)} required  >
              <option value="">Indique Estilo</option>
              <option value="Retrato">Retrato</option>
              <option value="Paisaje">Paisaje</option>
              <option value="Desnudo">Desnudo</option>
            </select>
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center" onChange={(e)=> setTecnica(e.target.value)} required  >
              <option value="">Indique Técnica</option>
              <option value="Óleo">Óleo</option>
              <option value="Acrílico">Acrílico</option>
              <option value="Pastel">Pastel</option>
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Digite El Precio" onChange={(e)=> setPrecio(e.target.value)} required  />
          </div>
        </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Guardar Datos</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>


  )
}
