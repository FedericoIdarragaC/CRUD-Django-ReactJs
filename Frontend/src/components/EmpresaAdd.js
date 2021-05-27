import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, headers } from "./../services/empresa.service";

export const EmpresaAdd = () => {
    const initialEmpresa = {
        id: null,
        nombre: "",
        direccion: "",
        NIT:"",
        telefono:null
      };
    const [empresa,setEmpresa] = useState(initialEmpresa);
    const [submitted,setSubmitted] = useState(false);
    const history = useHistory()
    const submitEmpresa = () => {
        let data = {
          nombre: empresa.nombre,
          direccion: empresa.direccion,
          NIT: empresa.NIT,
          telefono: empresa.telefono,
        };
        axios
          .post(`${baseURL}/empresas/`, data, {})
          .then((response) => {
            setEmpresa({
              nombre: response.data.nombre,
              direccion: response.data.direccion,
              NIT: response.data.NIT,
              telefono: response.data.telefono,
            });
            setSubmitted(true);
            console.log(response.data);
            history.push('/empresas');
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const handleEmpresaChange = (e) => {
        const { name, value } = e.target;
        setEmpresa({ ...empresa, [name]: value });
      };
    return (
        <div className="m-4">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  required
                  value={empresa.nombre}
                  onChange={handleEmpresaChange}
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  required
                  value={empresa.direccion}
                  onChange={handleEmpresaChange}
                  name="direccion"
                />
              </div>
              <div className="form-group">
                <label htmlFor="NIT">NIT</label>
                <input
                  type="text"
                  className="form-control"
                  id="NIT"
                  required
                  value={empresa.NIT}
                  onChange={handleEmpresaChange}
                  name="NIT"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  required
                  value={empresa.telefono}
                  onChange={handleEmpresaChange}
                  name="telefono"
                />
              </div>
              
                <button onClick={submitEmpresa} className="btn btn-success m-4">
                    Submit
                </button>
              
            </div>
    );
}