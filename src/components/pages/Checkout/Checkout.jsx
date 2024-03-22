const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <>
      <div>
        <h1>Checkout</h1>

        <form onSubmit={envioDeFormulario}>
          <input type="text" placeholder="Nombre" onChange={capturar} name="name" />
          <input type="text" placeholder="Apellido" onChange={capturar} name="lastName"/>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
