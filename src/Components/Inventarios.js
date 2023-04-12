import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { createInventario, getInventarios, editarInventario } from '../Services/InventarioService'
import Modal from './ui/ModalInventarios'
import ModalEdit from './ui/ModalEditInventario'

export default function Inventarios() {
const title= 'Inventario'
const [inventarios, setInventarios] = useState([])
const [query, setQuery] = useState(true)
const [loading, setLoading] = useState(true)
const [error, setError]= useState(false)
const [inventario, setInventario] = useState({
  nombre: ''
})
const [loadingSave, setLoadingSave] = useState(false)

const [id, setId] = useState('')

const listInventarios = async () => {
  try{
    setError(false)
    setLoading(true)
    const { data } = await getInventarios(query)
    console.log(data)
    setInventarios(data)
    
    setTimeout(() => {
      setLoading(false)
    }, 500)
    
  }catch(e){
    console.log(e)
    setError(true)
    setLoading(false)
  }
}

useEffect(() => {
  listInventarios()
}, [query])

const changeSwitch = () => {
  setQuery(!query)
}

const handleChange = (e) => {
  setInventario({
    ...inventario,
    [e.target.name]: e.target.value
  })
}

const saveInventario = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await createInventario(inventario)
    console.log(response)
    setInventario({nombre: ''})
    listInventarios()
    setTimeout(() => {
      setLoadingSave(false)
    }, 500)
  }catch(e){
    console.log(e)
    setError(true)
    setLoadingSave(false)
  }
}

const closeModal = () => {
  setInventario({nombre: ''})
  if(id)setId('')
}

const selectInventario = (evt) => {
  evt.preventDefault()
  setId(evt.target.id)
  const tEq = inventarios.filter(inventario => inventario._id === evt.target.id)
  setInventario({...tEq[0]})
}

const editInventario = async () => {
  try{
    setError(false)
    setLoadingSave(true)
    const response = await editarInventario(id, inventario)
    console.log(response)
    setInventario({nombre: ''})
    listInventarios()
    setTimeout(() => {
      setLoadingSave(false)
    }, 500)
  }catch(e){
    console.log(e)
    setError(true)
    setLoadingSave(false)
  }
}

  return (
    <>
        <ModalEdit 
          title={title}
          closeModal={closeModal}
          handleChange={handleChange}
          inventario={inventario}
          loadingSave={loadingSave}
          editInventario={editInventario}
        />
        <Modal 
          title={title}
          closeModal={closeModal}
          handleChange={handleChange}
          inventario={inventario}
          loadingSave={loadingSave}
          saveInventario={saveInventario}
        />
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckChecked"
              checked={query}
              onChange={changeSwitch}
            />
            <label 
              className="form-check-label" 
              htmlFor="flexSwitchCheckChecked"
            >
              Activos
            </label>
          </div>
          <button 
            type="button" 
            className="btn btn-outline-primary"
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal" 
            data-bs-whatever="@mdo"
          >
            Agregar
          </button>
          {
            error && 
            (
              <div className="alert alert-danger" role="alert">
                Ha ocurrido un error
              </div>
            )
          }
        
        <div className='table-responsive'>
          {
            loading 
            ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )
            :
            (
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Serial</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Color</th>
                  <th scope="col">Fecha Compra</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Estado Equipo</th>
                  <th scope="col">Tipo Equipo</th>
                  <th scope="col">Fecha Creacion</th>
                  <th scope="col">Fecha Actualizacion</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.values (inventarios).map((inventario, index) => {
                    return (
                      <tr key={inventario._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{inventario.serial}</td>
                        <td>{inventario.modelo}</td>
                        <td>{inventario.descripcion}</td>
                        <td>{inventario.foto}</td>
                        <td>{inventario.color}</td>
                        <td>{inventario.fechaCompra}</td>
                        <td>{inventario.precio}</td>
                        <td>{inventario.usuario}</td>
                        <td>{inventario.marca}</td>
                        <td>{inventario.estado ? 'Activo' : 'Inactivo'}</td>
                        <td>{inventario.tipoEquipo}</td>
                        <td>{dayjs(inventario.fechaCreacion).format('YYYY-MM-DD')}</td>
                        <td>{dayjs(inventario.fechaActualizacion).format('YYYY-MM-DD')}</td>
                        <td>
                          <button 
                            onClick={selectInventario}
                            type="button" 
                            className="btn btn-success"
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModalEdit" 
                            id={inventario._id}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
              </table>
            )
          }
        </div>
    </>
  )
}