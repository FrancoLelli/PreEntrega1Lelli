import Item from "../Item/Item";

const ItemList = ({celulares}) =>{
    return(
        <div>
            {celulares.map(cel => <Item key={cel.id} id={cel.id} img={cel.img}  name={cel.name} category={cel.category} price={cel.price} />)}
        </div>
    )
}

export default ItemList