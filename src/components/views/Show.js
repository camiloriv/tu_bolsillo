import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import {db} from '../../firebaseConfig/firebase'

const Show = () => {

  //1. configurar HOOKS
  const [compras, setCompras] = useState ([])

  //2. referenciamos DB de firestore
 const comprasCollection = collection(db, "compras")
  //3. funciones para mostrar todos los docs
  const getCompras = async() => {
    const data = await getDocs(comprasCollection)
    console.log(data)
    setCompras(
      data.docs.map((doc) => ({...doc.data(), id:doc.id}))
    )
    console.log(compras)
  }
  //4. funcion eliminar un doc

  //5. funciones de confirmacion para sweet alert

  //6. usamos useEffect
  useEffect( () => {
    getCompras()
  }, [])
  //7. devolvemos  vista a nuestro componente
  return (
    <div>show</div>
  )
}

export default Show