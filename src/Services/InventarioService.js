import { axiosConfig } from "../Configuration/AxiosConfig";

// obtener los tipos de equipos
const getInventarios = (estado) => {
    return axiosConfig.get('inventarios?estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear tipo equipo
const createInventario = (data = {}) => {
    return axiosConfig.post('inventarios', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarInventario = (tipoId, data) => {
  return axiosConfig.put(`inventarios?id=${tipoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}

export {
    getInventarios,
    createInventario,
    editarInventario,
}