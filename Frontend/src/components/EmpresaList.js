import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {baseURL,headers} from '.././services/empresa.service'
import { useHistory } from "react-router-dom";

export const EmpresaList = () => {
    const [empresas,setEmpresas] = useState([]);
    const history = useHistory();
    const countRef = useRef(0);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        listEmpresas();
    }, [countRef]);

    const listEmpresas = () => {
        axios.get(`${baseURL}/empresas/`, {})
        .then((response) => {
            setEmpresas(response.data);
        })
        .catch((e) => {
            console.error(e);
        });
    };
    const deleteEmpresa = (id) =>{
        axios
          .delete(`${baseURL}/empresas/${id}/`, {})
          .then((response) => {
            setDeleted(true);
            listEmpresas();
          })
          .catch((e) => {
            console.error(e);
          });
    };
    const handleUpdateClick = (id) => {
        history.push(`/empresa/${id}/update/`);
      };
    return(
      <div>
        <table className="table m-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">NIT</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {empresas &&
              empresas.map((empresa, index) => (
                <tr>
                  <th scope="row">{empresa.nombre}</th>
                  <td>{empresa.direccion}</td>
                  <td>{empresa.NIT}</td>
                  <td>{empresa.telefono}</td>
                  <td>
                    <span>
                        <button
                          className="btn btn-info m-1" onClick={() => handleUpdateClick(empresa.id)}>
                          Update
                        </button>
                      </span>
                      <span>
                        <button
                          className="btn btn-danger" onClick={() => deleteEmpresa(empresa.id)}>
                          Delete
                        </button>
                      </span>
                  </td>
                </tr>))}
          </tbody>
        </table>
      </div>
    );
}