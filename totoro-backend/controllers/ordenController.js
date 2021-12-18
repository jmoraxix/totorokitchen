const Orden = require('totoro-models').Orden;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const orden = await Orden.find()
            .populate('mesa')
            .populate({
              path: 'mesa',
              populate: {
                path: 'restaurante',
                model: 'Restaurante'
              }
            })
            .populate({
              path: 'platillos',
              populate: {
                path: 'platillo',
                model: 'Platillo'
              }
            });
        res.json(orden);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const orden = await Orden.findById(id)
            .populate('mesa')
            .populate({
              path: 'platillos',
              populate: {
                path: 'platillo',
                model: 'Platillo'
              }
            });
        if(!orden){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(orden)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var orden= new Orden(req.body);
    orden.codigo = await consecutivoController.generarConsecutivo('Orden');
    try {
        await orden.save();
        res.json({
            mensaje:'Objeto creado con exito'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const orden = await Orden.findByIdAndUpdate(
          { _id: id },
          req.body,
          { upsert: true }
          );
        res.json({
            mensaje:'Objeto actualizado con exito'
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const orden = await Orden.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.cancelarOrden = async(req, res)=>{
    try{
        const id= req.params.id;
        var orden = await Orden.findById({ _id : id });
        orden.activa = false;
        orden.fechaSalida = Date.now();

        await Orden.findOneAndUpdate(
            { _id : id },
            orden
        );

      res.json({
            mensaje:`Orden cerrada ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.cerrarOrden = async(id, res)=>{
    try{
        var orden = await Orden.findById({ _id : id });
        orden.activa = false;
        orden.fechaSalida = Date.now();

        await Orden.findOneAndUpdate(
            { _id : id },
            orden
        );
    } catch (error) {
        return error
    }
}

exports.agregarPlatillo = async(req, res)=>{
    try{
        const id= req.params.id;
        const idPlatillo = req.query.platillo;

        var orden = await Orden.findById({ _id : id });
        orden.platillos.push({ platillo: idPlatillo });

        await Orden.findOneAndUpdate(
            { _id : id },
            orden
        );

      res.json({
            mensaje:`Platillo actualizado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.quitarPlatillo = async(req, res)=>{
  try{
    const id = req.params.id;
    const idPlatillo = req.query.platillo;
    var orden = await Orden.findById({ _id : id });

    orden.platillos = orden.platillos.filter(function(item){
      return item._id != idPlatillo;
    });

    await Orden.findOneAndUpdate(
        { _id : id },
        orden
    );

    res.json({
      mensaje:`Platillo actualizado ${id} con exito`
    })
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.findOrdenActivaByMesa = async(req, res)=>{
  try {
    const codMesa = req.params.id;
    var orden = await Orden.findOne({ mesa: codMesa, activa: true })
        .populate('mesa')
        .populate({
          path: 'platillos',
          populate: {
            path: 'platillo',
            model: 'Platillo'
          }
        })
        .populate({
          path: 'platillos.platillo',
          populate: {
            path: 'tipoPlatillo',
            model: 'TipoPlatillo'
          }
        });
    if(!orden){
      orden = new Orden({ mesa: codMesa });
      orden.codigo = await consecutivoController.generarConsecutivo('Orden');
      await orden.save();
    }
    console.log(codMesa, orden);
    res.json(orden)
  } catch (error) {
    res.status(400).send(error);
  }
}