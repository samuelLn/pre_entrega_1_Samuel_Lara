


const ItemCount = ({count, addOne, subOne, reset, onAdd}) => {
  return (
    <>
        <button onClick={addOne}>Sumar</button>
        <h4>{count}</h4>
        <button onClick={subOne} disabled={ count === 1 ? true : false} >Restar</button>
        <button onClick={reset}>Resetear</button>
        <button onClick={ ()=> onAdd(count) } >Agregar al carrito</button>  
    </>
  )
}

export default ItemCount