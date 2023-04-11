import { axiosConfig } from "../Configuration/AxiosConfig";

// obtener los tipos de equipos
const getEstados = (estado) => {
    return axiosConfig.get('estadoequipos?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear tipo equipo
const createEstado = (data = {}) => {
    return axiosConfig.post('estados', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarEstado = (tipoId, data) => {
  return axiosConfig.put(`estadoequipos?id=${tipoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}

// opcional
const borrarTipoEquipo = (tipoId) => {
  return axiosConfig.delete(`tipoequipos/${tipoId}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}


export {
    getEstados,
    createEstado,
    editarEstado,
    borrarTipoEquipo
}