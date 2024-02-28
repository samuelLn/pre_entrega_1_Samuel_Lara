


const ItemCount = ({count, addOne, subOne}) => {
  return (
    <>
        <button onClick={addOne}>Sumar</button>
        <h4>{count}</h4>
        <button onClick={subOne} disabled={ count === 1 ? true : false} >Restar</button>
        <button>Agregar al carrito</button>
    </>
  )
}

export default ItemCount