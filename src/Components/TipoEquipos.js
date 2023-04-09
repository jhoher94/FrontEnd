import React, { useEffect, useState } from 'react'
import { gettipoEquipos } from '../Services/tipoequiposervice'
import dayjs from 'dayjs'


export default function TipoEquipos({title}) {

const [TipoEquipos, setTipoEquipos] = useState([])
const [query, setQuery ] = useState(true)

const listTipoEquipos= async () =>{

try{
  const { data } = await gettipoEquipos(query)
  console.log(data)
  setTipoEquipos(data)
}catch(e){
  console.log(e)
}
}

  useEffect(() =>{
    listTipoEquipos()
  }, [query] )

  const changeSwitch = () => {
    setQuery(!query)
  }

  return (
    <>
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
      <div className="form-check form-switch">
        <input className="form-check-input" 
        type="checkbox" role="switch" 
        id="flexSwitchCheckChecked" 
        checked={query} 
        onChange= {changeSwitch} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activos</label>
      </div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Agregar</button>
      <div className='table-responsive container'>
        <h2> {title} </h2>
        <table className='table table-bordered border-primary'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Creacion</th>
              <th scope="col">Fecha Act.</th>
            </tr>
          </thead>
          <tbody>
            {
              TipoEquipos.map((TipoEquipo, index) => {
                console.log(TipoEquipo)
                  return (
                  <tr key={index} >
                    <th scope="row">{index+1}</th>
                    <td>{TipoEquipo.nombre}</td>
                    <td>{TipoEquipo.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs(TipoEquipo.fechaCreacion).format('DD/MM/YYYY')}</td>
                    <td>{dayjs(TipoEquipo.fechaActualizacion).format('DD/MM/YYYY')}</td>
                    <td>  <button type="button" className="btn btn-success">Editar</button>
                          <button type="button" className="btn btn-warning">Warning</button>                    </td>
                  </tr>
                  )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}