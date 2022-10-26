import Producto from "../models/producto";

export const listarProductos = async (req, res) => {
  try {
    //Buscar los productos
    const productos = await Producto.find(); //buscar un obj con dato en particular find({categoria:'dulce'})

    //Responder al frontend con el arreglo de productos
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    //Enviar respuesta al frontend
    res.status(404).json({
      mensaje:'Error al buscar los productos'
    });
  }
};
export const obtenerProducto = async (req, res) => {
  try {
    //Obtener el parametro
    console.log(req.params.id)
    //Buscar en la base de datos el producto que coincide con el parametro
    const productoBuscado = await Producto.findById()
    //Responder al frontend
    res.status(200).json(productoBuscado)
  } catch (error) {
    console.log(error);
    //Enviar respuesta al frontend
    res.status(404).json({
      mensaje:'Error al buscar el producto'
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //Validar los adtos del objeto
    const productoNuevo = new Producto(req.body);
    //Guradar el objeto en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto se creo correctamente",
    });

    // Esta linea es para comprobar al principio que funcione todo bien
    // res.send("desde el backend en la peticion post");
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar agregar un nuevo producto",
    });
  }
};
