import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import Login from '../components/Login/Login';

const PrivateRoute = ({ prot, children }) => {

    let auth = false;

    let permiso = false;

    let cont = false;

    const token = localStorage.getItem('token');

    const usuarioString = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioString);

    const permisosString = localStorage.getItem('permisos');
    const permisos = JSON.parse(permisosString);

    console.log('Token local en Private: ', token);
    console.log('Usuario local en Private:', usuario);
    console.log('Permisos local en Private:', permisos);

    console.log("prot: ", prot)

    if (token != null) {
        auth = true
    } else {
        console.log("No autenticado")
    }

    if (permisos && permisos.includes(prot) || prot === 0) {
        permiso = true;
    }

    console.log("El permiso es: ", permiso)

    if (auth && permiso){
        cont = true
    }

    if (auth){
        return cont ? children : <Navigate to="/dashboard" />
    }else{
        return cont ? children : <Navigate to="/login" />
    }

}

export default PrivateRoute;
