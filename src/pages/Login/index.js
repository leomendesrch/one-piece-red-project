import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/Banner/banner";
import LoginTab from "../../components/Login/login";
import Footer from "../../components/Footer/footer";

function Login(){
    return(
        <>
        <Header />
        <Banner />
        <LoginTab />
        <Footer />
        </>
    )
}

export default Login