import React from "react";
import './styles.css'
function Data(){
    return(
        <>
        <div className="contact-container">
            <h1>Fale Conosco!</h1>
            <div className="contact-content">
                <label >Nome</label>
                <input name="nome"></input>

                <label>Email</label>
                <input placeholder="Insira um texto válido"></input>

                <label>Assunto</label>
                <select name="Escolha o assunto">
                    <option>Elogio</option>
                    <option>Crítica</option>
                </select>

                <textarea placeholder="Insira um texto válido"></textarea>
            </div>
        <button id="contact-button">Enviar</button>
        </div>
        </>
    )
}
export default Data