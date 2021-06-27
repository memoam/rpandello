import "../css/Estilos.css";
import React, {Component} from "react";

class Open extends Component{
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
            <div className="lg">hola</div>
            <div className="lg">hola</div>
            <div className="lg">hola</div>
            <div className="lg">hola</div>
                
            </div>


        );

    }
}

export default Open;