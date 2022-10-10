import { useState, useEffect } from "react";
import { getProductosById } from "../../datosCelulares";
import ItamDetail from "../ItamDetail/ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [celular, setCelulares] = useState({})

    const { productoId } = useParams()

    useEffect(() => {
        getProductosById(productoId)  
        .then(celular => {
            setCelulares(celular)  
        })
    }, [])


    return (
        <div>
            <h2>Detalle del producto</h2>
            <ItamDetail {...celular}/>
        </div>
    )
}

export default ItemDetailContainer