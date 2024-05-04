import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Register } from "./Register"
import { List } from "./List"
import { Statistics } from "./Statistics"

export const Menu = () => {

  const [usu] = useState(localStorage.getItem("usu"));
  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [statis, setStatis] = useState("");

  function cerrarSesion(){
    localStorage.removeItem("usu");
    localStorage.removeItem("miLogin");
    document.getElementById("caja_menu").style.display= "none";
    //document.getElementById("form_login").style.display = "block";
    //document.getElementById("txtusu").value = "";
    //document.getElementById("txtpas").value = "";
    //document.getElementById("txtusu").focus();
    
  }

  function op_register(){
    setReg("1");
    setLis("0");
    setStatis("0");
  }

  function op_list(){
    setReg("0");
    setLis("1");
    setStatis("0");
  }

  function op_statis(){
    setReg("0");
    setLis("0");
    setStatis("1");
  }

  return (

  <>

  <div id="caja_menu" style={{textAlign:"left"}}>

    <strong className="h3">
      Bienvenido Usuario : { usu.toUpperCase() }
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" ">Menú Principal</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="" className="nav-link  h5  text-center" onClick={ op_register }  >Registrar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={ op_list }  >Listar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick={ op_statis }  >Estadistica</NavLink>
            <a className="nav-link  h5  text-center" style={{color:"blue"}} href=" " onClick={ cerrarSesion }  >Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  { reg === "1" && <Register/> }
  { lis === "1" && <List/> }
  { statis === "1" && <Statistics/> }

  </>

  )
}
