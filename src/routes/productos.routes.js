import { Router } from "express";
import { crearProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

//Instanciar el router
const router = Router(); //Ahora router tiene todas las propiedades de Router();

//Solo puede haber una sola peticion de cada tipo
router.route("/productos").get(listarProductos).post(crearProducto);   
router.route("/productos/:id").get(obtenerProducto) 

export default router;
