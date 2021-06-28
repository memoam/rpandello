
import "../css/Login.css";
import React, {Component} from "react";

class Login extends Component{
    state={
        form:{
            username:'',
            password:''
        }
    }
    handlechange=async e=>{
        await this.setState({
            ...this.setState.form,
            [e.target.name]:e.target.value
        });
        console.log(this.state.form)
    }

    render(){
        return(
            <div className="container">
            <h1 className="logo animate__animated animate__backInUp">PANDELLO <span>reto</span></h1>
            <div className="lg animate__animated animate__backInDown">
                <div className="lg-info">

                    <h3>Iniciar sesión</h3>
                    <form className="animate__animated animate__bounce">
                        <p>
                            <label>Usuario</label>
                            <input 
                                type="text" 
                                name="username"
                                onChange={this.handlechange}
                            />
                        </p>
                        <p>
                            <label className="userl">Contraseña</label>
                            <input 
                                type="password" 
                                name="password"
                                onChange={this.handlechange}
                            />
                        </p>
                        <p>
                            
                        <button><a href="./Open">Ingresar</a></button>
                       
                        </p>
                        <p><a href="./Reg">¿Ya tengo cuenta?</a></p>
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