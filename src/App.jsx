import React, { useState, useEffect } from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Default from './components/Default';
import Dashboard from './components/Dashboard/Dashboard';
import Usuarios from './components/Usuarios/Usuarios';
import Roles from './components/Configuracion/Roles';
import AgregarUsuarios from './components/Usuarios/AgregarUsuarios';
import EditarUsuarios from './components/Usuarios/EditarUsuarios';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import './components/Layout.css';
import RegistrarCompra from './components/Compras/Compras/RegistrarCompra';
import TablaCompras from './components/Compras/Compras/TablaCompras';
import TablaProveedores from './components/Compras/Proveedores/TablaProveedores';
import TablaInsumos from './components/Compras/Insumos/TablaInsumos';
import TablaCatInsumos from './components/Compras/Cat-Insumos/TablaCatInsumos';


function App() {

  const token = localStorage.getItem('token');

  let malp = true;

  if (token == null) {
    malp = false;
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={
          <PrivateRoute prot={0}>
            <Layout />
          </PrivateRoute>
        }>
          <Route exact path="/dashboard" element={
            <PrivateRoute prot={0}>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route path="/usuarios" element={
            <PrivateRoute prot={2}>
              <Usuarios />
            </PrivateRoute>}
          />
          <Route path="/agregarUsuarios" element={
            <PrivateRoute prot={2}>
              <AgregarUsuarios />
            </PrivateRoute>}
          />
          <Route path="/editarUsuarios/:id_usuario" element={
            <PrivateRoute prot={2}>
              <EditarUsuarios />
            </PrivateRoute>}
          />
          <Route path="/roles" element={
            <PrivateRoute prot={1}>
              <Roles />
            </PrivateRoute>}
          />

          <Route path="/CatInsumos" element={
            <PrivateRoute prot={3}>
              <TablaCatInsumos />
            </PrivateRoute>}
          />

          <Route path="/RegistrarCompra" element={
            <PrivateRoute prot={6}>
              <RegistrarCompra />
            </PrivateRoute>}
          />

          <Route path="/Compra" element={
            <PrivateRoute prot={6}>
              <TablaCompras />
            </PrivateRoute>}
          />

          <Route path="/Proveedores" element={
            <PrivateRoute prot={5}>
              <TablaProveedores />
            </PrivateRoute>}
          />

          <Route path="/Insumos" element={
            <PrivateRoute prot={4}>
              <TablaInsumos />
            </PrivateRoute>}
          />


          <Route path="*" element={
            <PrivateRoute prot={0}>
              <Default />
            </PrivateRoute>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
