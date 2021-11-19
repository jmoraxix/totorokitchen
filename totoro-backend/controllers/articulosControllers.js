const Articulos = require("../models/Articulo");
exports.lista = async (req, res, next) => {
  try {
    const articulos = await Articulos.find();
    res.json(articulos);
  } catch (error) {
    console.log("Artculo.export.lista");
    res.status(400).send(error);
    next();
  }
};
exports.seleccionado = async (req, res, next) => {
  try {
    const articulo = await Articulos.findById(req.params.id);
    if (!producto) {
      res.json({
        Error: "El articulo no existe",
      });
    }
    res.json(articulo);
  } catch (error) {
    console.log("Artculo.export.selecciona");
    res.status(400).send(error);
    next();
  }
};
exports.agregar = async (req, res, next) => {
    const articulo = new Articulos(req.body);
  try {
    await articulo.save()
    res.json({
      mensaje: "El Articulo se creo con exito",
    });
  } catch (error) {
    console.log("Artculo.export.agregar");
    res.status(400).send(error);
    next();
  }
};
exports.actualizar = async (req, res, next) => {
  try {
    await Articulos.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json({mensaje:'El articulo se actualizo con exito'})
  } catch (error) {
    console.log("Artculo.export.actualizar");
    res.status(400).send(error);
    next();
  }
};
exports.eliminar = async (req, res, next) => {
  try {
      await Articulos.findOneAndRemove({_id:req.params.id})
      res.json({mensaje:'El articulo se elimino con exito'})
  } catch (error) {
    console.log("Artculo.export.");
    res.status(400).send(error);
    next();
  }
};
