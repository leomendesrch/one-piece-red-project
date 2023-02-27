import React from "react";
import './login-style.css'

function LoginTab(){
    return(
        <>
            <div className="login-container">
                <h1 id="logintext">Faça Login!</h1>
                <div className="login-content">
                    <label>Email</label>
                    <input></input>

                    <label>Senha</label>
                    <input></input>
                </div>
            <button>Entrar</button>
            </div>
        </>
    )
}

export default LoginTab