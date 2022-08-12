import React from "react";

import { About, Contact, Footer, Header, Projects, Skills, Testimonials } from './container';
import { Navbar } from "./components";
import './App.scss';

const App = () => {
    return (
        <div className="app">

            <Navbar />
            <About />
            <Contact />
            <Footer />
            <Header />
            <Projects />
            <Skills />
            <Testimonials />

        </div>
    );
}

export default App;