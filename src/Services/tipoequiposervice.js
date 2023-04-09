import { axiosConfig } from "../Configuration/AxiosConfig"


const gettipoEquipos = (estado) =>{

    return axiosConfig.get('tipoequipos?estado='+ estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

const CreatetipoEquipos = (data = {}) =>{
    return axiosConfig.post('tipoEquipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export  {
    gettipoEquipos,
    CreatetipoEquipos  
}