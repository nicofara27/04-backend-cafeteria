export const listarProductos = (req, res) => {
    res.send("desde el backend en la peticion get");
      };

export const crearProducto = (req, res) => {
    console.log(req.body)
    //Validar los adtos del objeto
    //Guradar el objeto en la base de datos
    res.send("desde el backend en la peticion post");
      };