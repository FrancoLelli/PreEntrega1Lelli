const ItamDetail = ({id, img, name, price, category, descripcion, stock}) => {
    return (
        <div>
            <img src={img} alt={name} style={{width: 100}}></img>
            <h2>{name}</h2>
            <p>Precio: {price}</p>
            <p>Sobre el {name}: {descripcion}</p>
        </div>
    )
}

export default ItamDetail