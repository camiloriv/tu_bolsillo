import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import {db} from '../../firebaseConfig/firebase'
import { Create } from './Create'

export const Show = () => {
    
    //se configuran los hooks
    const [compras, setCompra] = useState ([]);
    
    // se referencia la DB de firestore
    const creditoCollection = collection(db, "Credito");

    //Function para mostras los Docs
    const getCompras = async () => {
        const data = await getDocs(creditoCollection)
        //console.log(data.docs)
    setCompra(
        data.docs.map( (doc) => ({...doc.data(), id:doc.id}))
    )
    }
    // funcion eliminar docs
    const deleteCompras = async (id) => {
        const compraDoc = doc(db , "Credito", id)
        await deleteDoc(compraDoc)
        getCompras()
    }
    //funcionar confirmacion sweet alert

    // usamos useEffect
    useEffect( () => {
        getCompras()
    }, [] )

    return (
    <>
    <button>
    <Link to="/create">CREAR</Link>
    </button>
    <div>
        <h1>Listado de compras</h1>
        
        <table>
        <tr>
            <th>Descripcion</th>
            <th>Facturacion</th>
            <th>Monto</th>
            <th>Cantidad cuotas</th>
            <th>Valor cuota</th>
            <th>Actions</th>
        </tr>
        
        <tbody>
            {compras.map( (compra) => (
                <tr key={compra.id}>
                    <td>{compra.description}</td>
                    <td>{compra.facturacion}</td>
                    <td>{compra.monto}</td>
                    <td>{compra.cantidad_cuota}</td>
                    <td>{compra.valor_cuota}</td>
                    <td>
                        <Link to={`/edit/${compra.id}`}>Editar</Link>
                        <button onClick={ () => {deleteCompras(compra.id)}}>Borrar</button>
                    </td>

                </tr>
            ))}
        </tbody>
        </table>

    </div>
    </>
  )
}
