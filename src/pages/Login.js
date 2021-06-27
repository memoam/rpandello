
import "../css/Estilos.css";
import React, {Component} from "react";

class Login extends Component{
    render(){
        return(
            <div className="container">
            <h1 className="logo animate__animated animate__backInUp">PANDELLO <span>reto</span></h1>
            <div className="lg animate__animated animate__backInDown">
                <div className="lg-info">

                    <h3>Inciar sesión</h3>
                    <form className="animate__animated animate__bounce">
                        <p>
                            <label className="userl">Usuario</label>
                            <input type="text" className="useri"/>
                        </p>
                        <p>
                            <label className="userl">Contraseña</label>
                            <input type="password" className="useri"/>
                        </p>
                        <p>
                            <button type="submit">
                                Ingresar
                            </button>
                        </p>
                    </form>
                </div>
                <div className="lg-img">


                </div>


            </div>
        </div>

        );

    }
}

export default Login;