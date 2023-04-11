import { axiosConfig } from "../Configuration/AxiosConfig";

// obtener los tipos de equipos
const getMarcas = (estado) => {
    return axiosConfig.get('marcas?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear tipo equipo
const createMarca = (data = {}) => {
    return axiosConfig.post('marcas', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarMarca = (tipoId, data) => {
  return axiosConfig.put(`marcas?id=${tipoId}`, data, {
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
    getMarcas,
    createMarca,
    editarMarca,
    borrarTipoEquipo
}