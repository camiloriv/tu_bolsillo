import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';

const Create = () => {
  const [description, setDescription] = useState ( '' )
  const [monto, setMonto] = useState ( 0 )
  const [cantidad_cuota, setCantidad_cuota] = useState ( 0 )
  const [facturacion, setFacturacion] = useState ( false )

  const navigate = useNavigate()

  const comprasCollection = collection(db, "Credito")

  const store = async (e) => {
    e.preventDefault()
    await addDoc(comprasCollection, { 
      description : description,
      monto : monto,
      cantidad_cuota : cantidad_cuota,
      facturacion : facturacion,
      valor_cuota : calcularCuotas(monto, cantidad_cuota)
    })
    navigate('/')
  }

    // funcion para calcular valor cuotas.
    const calcularCuotas = (vCompra, nCuotas) => {
      const vCuota = vCompra / nCuotas;
      return vCuota
    }

  return (
    <>
    <h1>CREAR COMPRA</h1>
    <div>
      <form onSubmit={store}>
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
      <button type='submit'>crear</button>
      </form>
    </div>
    </>
  )
}

export {Create};