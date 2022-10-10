import {Link} from 'react-router-dom'

const Item = ({id, img, name, category, price}) => {
    return (
        <div className='general'>
            <div className="card">
                <img className="card-img-top" src={img} alt={name} style={{width: 100}}/>
                <div className="card-body">
                    <h5 className="card-title">Producto: {name}</h5>
                    <p className="card-text">Tipo: {category}</p>
                    <p className="card-text">Precio: {price}</p>
                    <Link to={`/detail/${id}`}>Ver Detalle</Link>

                </div>
            </div>
        </div>
    )
}

export default Item