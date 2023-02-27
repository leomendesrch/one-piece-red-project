import React from "react";
import './styles.css'
import Video from '../../assets/trailer.mp4'

function VideoContainer(){
    return(
        <div id="videoContainer">
            <div id="content">
                <video controls className="video"><source src={Video}></source></video>
                <div id="sinopse">
                    <p id="video-p">Uta - a cantora mais amada do mundo. Sua voz, com a qual ela canta enquanto esconde sua verdadeira identidade, foi descrita como "de outro mundo". Ela aparecerá em público pela primeira vez em um show ao vivo. Enquanto o local se enche de todos os tipos de fãs de Uta - piratas animados, a Marinha assistindo de perto e os Chapéus de Palha simplesmente vieram para curtir sua performance sonora A história começa com o fato chocante de que ela é "filha de Shanks".</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default VideoContainer