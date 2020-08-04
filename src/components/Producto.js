import React from 'react';


 const Producto = ({producto,carrito,agregarProducto, productos}) => {
     //Agregar producto al carrito
    const { nombre, precio, id }= producto
    const seleccionarProducto = id =>{
        //console.log('Comprando... ', id);
        const producto = productos.filter(producto => producto.id === id)[0];
        console.log(producto);
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter( prducto => producto.id !== id );
        //colocar los productos en el state

        agregarProducto(productos);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
           
            {productos
            ?
            (
                <button type="button"
                onClick={()=> seleccionarProducto(id)}>
          Comprar
        </button>
            )
            :
            (
                <button type="button"
                 onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
            )}
        </div>
    );
};



export default Producto;