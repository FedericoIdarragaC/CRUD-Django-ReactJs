import axios from "axios";
import React,{useState,useEffect,useRef} from "react";
import { useParams } from "react-router";
import {baseURL,headers} from '.././services/empresa.service'
import { useHistory } from "react-router-dom";

export const EmpresaActualizar = () => {
    const EmpresaInitial = {
        nombre:"",
        direccion:"",
        NIT:"",
        telefono:0
    }
    let {id} = useParams();
    const [currentEmpresa, setCurrentEmpresa] = useState(EmpresaInitial);
    const [submitted, setSubmitted] = useState(false);
    const countRef = useRef(0);
    const history = useHistory();
    const handleEmpresaChange = (e) => {
        const { name, value } = e.target;
        setCurrentEmpresa({ ...currentEmpresa, [name]: value });
    };
    useEffect(() => {
        getEmpresa();
      }, [countRef]);
    const getEmpresa = () => {
        axios.get(`${baseURL}/empresas/${id}/`, {})
        .then((response) => {
            console.log(response.data)
            setCurrentEmpresa(response.data);
          })
        .catch((e) => {
            console.error(e);
          });
    };
    const updateEmpresa = () => {
        axios.put(`${baseURL}/empresas/${id}/`,currentEmpresa,{})
        .then((response)=>{
            setCurrentEmpresa(response.data);
            setSubmitted(true)
            history.push('/empresas');
        }).catch((e)=>{
            console.log(e)
        });
    }
    return(<div className="m-4">
    <div className="form-group">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        className="form-control"
        id="nombre"
        required  
        value={currentEmpresa.nombre}
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
        value={currentEmpresa.direccion}
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
        value={currentEmpresa.NIT}
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
        value={currentEmpresa.telefono}
        onChange={handleEmpresaChange}
        name="telefono"
      />
    </div>
    
      <button onClick={updateEmpresa} className="btn btn-success m-4">
          Submit
      </button>
    
  </div>)
}