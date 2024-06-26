import React, { useState } from "react";
import { Menu } from './Menu'

export const Login = () => {

  const comprobarSesion = () => {
    var sesion = localStorage.getItem("miLogin");
    if(sesion){
      return JSON.parse(sesion); //true
    }else{
      return false;
    }
  }

  //Variables de estado
  const [miLogin, setMiLogin ] = useState(comprobarSesion());
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete los datos faltantes!!");
    }else{
      if(usuario==="admin" && password==="123"){
        setMiLogin(true);
        localStorage.setItem("miLogin",true);
        localStorage.setItem("usu",usuario);
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin(false);
        alert("Error de usuario y/o contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }

  }

  return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
        { miLogin === false ?

        <form id="form_login">
            <div>
                <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                <label htmlFor="txtusu"><strong>Username</strong></label>
                <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsuario(e.target.value) }  required/>
            </div>
            <div>
                <label htmlFor="txtpas"><strong>Password</strong></label>
                <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPassword(e.target.value) }  required/>
            </div><br/>
            <input type="submit" onClick={ iniciarSesion} className="btn btn-primary" value="Login"/>
        </form>

        : 
          <Menu/>
        
        }
        
    </div>    
  );
};
