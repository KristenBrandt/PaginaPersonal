import React from "react";
import Footer from "./footer.png";
import Separator from "./separator.png";
import Yo from "./yo.png";
import CSS from "./CSS.png";
import Memoria from "./Memoria.png";
import Sunflower from "./Base.png";
import Nohtml from "./Nohtml.png"
import Calculadora from "./Calculadora.png";
import "./App.css";

function App(){
    return(
        <div className = "container-tot" >
            <div className="header">
            <header>
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
                    <li className="nav-item">
                        <a className="nav-link" href="#porta">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#herra">Heramientas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#git">Github</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </header>
            </div>
            <div className="body">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#8ecae6"></rect></svg>

                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Acerca de mi</h1>
                        <p>Información acerca de mi</p>
                        <p><a className="btn btn-lg btn-primary" href="#acerca">Ir a página</a></p>
                        
                    </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#8ecae6"></rect></svg>

                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Trabajos hechos en Sistemas y Tecnologías Web</h1>
                        <p>Progreso de trabajo hecho en el primer semestre 2022</p>
                        <p><a className="btn btn-lg btn-primary" href="#porta">Ver trabajos</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#8ecae6"></rect></svg>

                    <div className="container">
                    <div className="carousel-caption text-end">
                        <h1>Github</h1>
                        <p>Proyectos personales y de la universidad</p>
                        <p><a className="btn btn-lg btn-primary" href="#git">Github</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            </div>
            <br></br>
            <br></br>
            <div className="colors"  id = "acerca">
                <img src={Separator} className = "img2"></img>
            </div>
            
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2 className="blue">Acerca de mi</h2>
                    <h1 className="blue italics">Kristen Brandt</h1>
                    <img src={Yo} className="img1"></img>
                    </div>
                    <div className="col">
                    <h2 className="texto blue">Hola soy Kristen ❣ Tengo 23 años y actualmente estoy en mi último año de Ingeniería en Bioinformática. </h2>
                    </div>
                </div>
            </div>

            <div className="colors" id="porta">
                <img src={Separator} className = "img2"></img>
            </div>

            <br></br>
            <h1 className="blue">Portafolio</h1>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="custom-lb me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Calculadora</h2>
                        <p className="lead">Calculadora hecha con React</p>
                        <img src={Calculadora}></img>
                        <br></br>
                        <p><a className="btn btn-lg btn-primary" href="http://stw-uvg-22.site/lab10/KABF171482/bundle_react/index.html">Ver la Calculadora</a></p>

     
                    </div>
                
                </div>
                <div className="custom-orange me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">HTML only</h2>
                        <p className="lead">Página hecha solo utilizando HTML</p>
                        <img src={Nohtml}></img>
                        <br></br>
                        <p><a className="btn btn-lg btn-primary" href="http://13.58.152.255/lab3/index.html">Ver la página de solo HTML</a></p>
     
                    </div>
                
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="custom-lo me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Solo CSS</h2>
                        <p className="lead">Imagen utilizando solo CSS</p>
                        <img src={CSS}></img>
                        <br></br>
                        <p><a className="btn btn-lg btn-primary" href="https://a.singlediv.com">Ver la imagen original</a></p>

     
                    </div>
                
                </div>
                <div className="custom-blue me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Juego de memoria</h2>
                        <p className="lead">Memoria utilizando React</p>
                        <img src={Memoria}></img>
                        <br></br>
                        <p><a className="btn btn-lg btn-primary" href="http://stw-uvg-22.site/lab08/KABF171482/lab8_react/bundle_react/index.html">Ver juego</a></p>
     
                    </div>
                
                </div>
            </div>
                
            <div className="colors" id="herra">
                <img src={Separator} className = "img2"></img>
            </div>

            <br></br>
            <h1 className="blue">Herramientas utilizadas</h1>

            <div className="container pequeno">

            <div className="list-group w-auto">
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower}  width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">HTML</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/HTML">Ir a página de HTML</a></p>
                        
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower}  width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">CSS</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Ir a página de CSS</a></p>
                    </div>
                    </div>
                </a>
                
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">JavaScript</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Ir a página de JS</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">Webpack</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://webpack.js.org/">Ir a página de Webpack</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">SASS/SCSS</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://sass-lang.com/">Ir a página de SASS</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">Babel</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://babeljs.io/">Ir a página de Babel</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">React</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://reactjs.org/">Ir a página de React</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">Eslint - Airbnb</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://eslint.org/">Ir a página de Eslint</a></p>
                    </div>
                    </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src={Sunflower} width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                    <div className=" gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">Jest</h6>
                        <p><a className="btn btn-lg btn-primary" href="https://jestjs.io/">Ir a página de Jest</a></p>
                    </div>
                    </div>
                </a>
            </div>
            </div>

            <div className="colors">
                <img src={Separator} className = "img2"></img>
            </div>

            <br></br>
            <h1 className="blue">Github</h1>
            <a className="btn btn-lg btn-primary" id="git" href="https://github.com/KristenBrandt">Ir a mi Github</a>

    


            


            <footer className="footer mt-auto py-3 bg-light d-flex flex-column">
                <img src={Footer} className= "img2"></img>
            </footer>

        </div>
    )
}

export default App;