import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import {MainCarousel} from "./MainCarousel";
import {Footer} from "./Footer";


function Layout({children}) {
    return (
        <div className="container">
            <NavBar />
            <MainCarousel />
            <Notify />
            <Modal />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
