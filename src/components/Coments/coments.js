import React from "react";
import "./styles.css"
import livia from '../../assets/livia.jpg'
import neiva from '../../assets/neiva.jpg'
import cams from '../../assets/jurios.jpg'
import fael from '../../assets/fael.jpg'
import louiz from '../../assets/louiz.jpg'
import caio from '../../assets/caio.jpg'
import stars from '../../assets/star.png'

function Coments(){
    return(
        <>
            <div className="coments-container">
                <h1>Comentarios</h1>
                <div className="content">
                    <div id="cards">
                        <img src={livia} alt="" className='user'></img>
                        <h3>Lívia Carvalho</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                        </div>
                        <p className="coment-p">O Shanks de One Piece sem dúvidas é uma obra prima dos animes.</p>
                    </div>
                    <div id="cards">
                    <img src={neiva} className='user' alt=""></img>
                        <h3>Gabriel Neiva</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                        </div>
                        <p className="coment-p">Filme sensacional. Foi um dos melhores filmes de anime que já assisti.</p>
                    </div>
                    <div id="cards">
                    <img src={caio} className='user' alt=""></img>
                        <h3>Caio Neres</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                        </div>
                        <p className="coment-p">Excelente roteiro, ator principal e coadjuvantes. Uta manda bem, embora eu mesmo não esperasse, ela canta pra caramba!</p>
                    </div>
                    <div id="cards">
                    <img src={louiz} className='user' alt=""></img>
                        <h3>Arthur Louiz</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                        </div>
                        <p className="coment-p">Gostei muito de ver a tripulação dos Chapéus de palha denovo, tava com saudade!</p>
                    </div>
                    <div id="cards">
                    <img src={fael} alt="" className='user'></img>
                        <h3>Rafael Campos</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                        </div>
                        <p className="coment-p">Meu irmão ama one piece, não achei que ia gostar mas assiti o filme e achei muito foda!</p>
                    </div>
                    <div id="cards">
                    <img src={cams} alt="" className='user'></img>
                        <h3>Julia Rios</h3>
                        <div className="stars">
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt=""></img>
                            <img src={stars} id='star' alt="a"></img>
                        </div>
                        <p className="coment-p">Esse filme ta íncrivel, a nova transformação do luffy gear 5 esta surreal, ele parece mesmo o leo mendes rsrs.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coments