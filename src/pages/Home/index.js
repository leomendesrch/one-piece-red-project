import React from "react";
import { isDOMComponent } from "react-dom/test-utils";
import Header from "../../components/header/header";
import './styles.css'
import VideoContainer from "../../components/videocontainer/videocontainer";
import Cards from "../../components/Cards/cards";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";

function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <VideoContainer/>
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;