import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Prueba from "./pages/prueba";
import AgregarStartup from "./pages/agregarstartup";

ReactDOM.render(
	<Router>
		<Route exact path="/" component={App} />
		<Route exact path="/prueba" component={Prueba} />
		<Route exact path="/agregarstartup" component={AgregarStartup} />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Router > Su unica funcion es englobar a TODAS las rutas. Inicio y fin de rutas en una aplicacion. ROUTE es para especificar las rutas

/*
    <Route path="/" component={App} />  path="/" < Ruta inexacta
Todos los componentes que utilizamos como pages, van en pages.
Todos los componentes que utilizamos a lo largo del prjecto van en components
 */
