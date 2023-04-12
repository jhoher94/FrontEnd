import { axiosConfig } from "../Configuration/AxiosConfig";

// obtener los tipos de equipos
const getUsuarios = (estado) => {
    return axiosConfig.get('usuarios?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear tipo equipo
const createUsuario = (data = {}) => {
    return axiosConfig.post('usuarios', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarUsuario = (tipoId, data) => {
  return axiosConfig.put(`usuarios?id=${tipoId}`, data, {
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
    getUsuarios,
    createUsuario,
    editarUsuario,
    borrarTipoEquipo
}