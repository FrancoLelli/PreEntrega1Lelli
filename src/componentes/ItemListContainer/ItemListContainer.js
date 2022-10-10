import { useState, useEffect } from "react"
import { getProductos, getProductosByCategory } from "../../datosCelulares"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [celulares, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {catId} = useParams()

    useEffect(() =>{
        const result = catId ? getProductosByCategory : getProductos
        result(catId).then(response => {
            setProductos(response)
        }).finally(() =>{
            setLoading(false)
        })
    }, [catId])
    

    if(loading){
        return <h1 align='center'>Cargando...</h1>
    }



    return (
        <div>
            <h1 align="center">{greeting}</h1>
            <h2>Listado de productos</h2>
            <ItemList celulares = {celulares} />
        </div>
    )
}

export default ItemListContainer