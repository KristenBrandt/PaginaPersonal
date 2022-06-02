import React from "react";
import  ReactDOM  from "react-dom";
import Separator from "./separator.png";
import Calculadora from "./Calculadora.png";
import Yo from "./yo.png";
import Footer from "./footer.png";
import Sunflower from "./Base.png";
import { cleanup } from "@testing-library/react";


afterEach(cleanup);

it("hace render sin problema el navbar", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-blue">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Kristen Brandt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#acerca">Home</a>
                </li>
                </ul>
                </div>
                </div>
                </nav>
                </header>, div)
})

it("hace render sin problema el spacer", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<div className="colors"  id = "acerca">
    <img src={Separator} className = "img2"></img>
</div>, div)
})

it("hace render sin problema el portafolio grid", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="custom-lb me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Calculadora</h2>
            <p className="lead">Calculadora hecha con React</p>
            <img src={Calculadora}></img>
            <br></br>
            <p><a className="btn btn-lg btn-primary" href="http://stw-uvg-22.site/lab10/KABF171482/bundle_react/index.html">Ver la Calculadora</a></p>


        </div>
    
    </div>
</div>, div)
})

it("hace render sin problema los botones", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<a className="btn btn-lg btn-primary" id="git" href="https://github.com/KristenBrandt">Ir a mi Github</a>, div)
})

it("hace render sin problema la primera imagen (mia)", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<img src={Yo} className="img1"></img>, div)
})

it("hace render sin problema el footer", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<footer className="footer mt-auto py-3 bg-light d-flex flex-column">
    <img src={Footer} className= "img2"></img>
</footer>, div)
})

it("hace render sin problema los links", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<div className="list-group w-auto">
    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        
        <div className=" gap-2 w-100 justify-content-between">
        <div>
            <h6 className="mb-0">HTML</h6>
            <p><a className="btn btn-lg btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/HTML">Ir a página de HTML</a></p>
            
        </div>
        </div>
    </a>
    </div>, div)
})

it("hace render sin problema los girasoles en las listas", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<div className="list-group w-auto">
    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src={Sunflower}  width="32" height="32" className="rounded-circle flex-shrink-0"></img>
        <div className=" gap-2 w-100 justify-content-between">
        <div>
            <h6 className="mb-0">HTML</h6>
            <p><a className="btn btn-lg btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/HTML">Ir a página de HTML</a></p>
            
        </div>
        </div>
    </a>
    </div>, div)
})

it("hace render sin problema los titulos", ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<h1 className="blue">Portafolio</h1>, div)
})






