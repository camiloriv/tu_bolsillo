import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/firebase'

const Edit = () => {

  const [description, setDescription] = useState ( '' )
  const [monto, setMonto] = useState ( 0 )
  const [cantidad_cuota, setCantidad_cuota] = useState ( 0 )
  const [facturacion, setFacturacion] = useState ( false )

  const navigate = useNavigate()
  const {id} = useParams()

  const update =  async (e) => {
    e.preventDefault()
    const compra = doc(db, "Credito", id)
    const data = { 
      description : description,
      monto : monto,
      cantidad_cuota : cantidad_cuota,
      facturacion : facturacion,
      valor_cuota : calcularCuotas(monto, cantidad_cuota)
    }
    await updateDoc(compra, data)
    navigate('/')
  }

      // funcion para calcular valor cuotas.
      const calcularCuotas = (vCompra, nCuotas) => {
        const vCuota = vCompra / nCuotas;
        return vCuota
      }

  const getCompraById = async (id) => {
    const compra = await getDoc(doc(db, "Credito", id))
    if (compra.exists()){
      setDescription(compra.data().description)
      setMonto(compra.data().monto)
      setFacturacion(compra.data.facturacion)
      setCantidad_cuota(compra.data().cantidad_cuota)
    } else {
      console.log("el producto no existe")
    }
  }
  useEffect( () => {
    getCompraById(id)
  }, [])
  return (
    <>
    <h1>EDITAR COMPRA</h1>
    <div>
      <form onSubmit={update}>
      <label>Descripcion</label>
      <input
        value={description}
        onChange={ (e) => setDescription(e.target.value)}
        type='text' 
      /><br/>

      <label>Monto</label>
      <input
        value={monto}
        onChange={ (e) => setMonto(e.target.value)}
        type='number' 
      /><br/>

      <label>Pago mes actual</label>
      <input
        name= "facturacion"
        value="false"
        onChange={ (e) => setFacturacion(e.target.value)}
        type='radio'
      /><br/>
      <label>Pago diferido</label>
      <input
        name= "facturacion"
        value="true"
        onChange={ (e) => setFacturacion(e.target.value)}
        type='radio' 
      />
      <br/>
      
      <label>N° Cuotas</label>
      <input
        value={cantidad_cuota}
        onChange={ (e) => setCantidad_cuota(e.target.value)}
        type='number' 
      /><br/>
      <button type='submit'>ACTUALIZA</button>
      </form>
    </div>
    </>
  )
}

export {Edit};