const Cajas = require('totoro-models').Cajas;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const cajas = await Cajas.find().populate('restaurante');
        res.json(cajas);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const cajas = await Cajas.findById(id).populate('restaurante');
        if(!cajas){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(cajas)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var cajas= new Cajas(req.body);
    cajas.codigo = await consecutivoController.generarConsecutivo('Caja');
    try {
        await cajas.save();
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
        const cajas = await Cajas.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
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
        const cajas = await Cajas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.findByRestaurante = async(req, res)=>{
  try {
    const codRestaurante = req.query.codigo;
    const caja = await Cajas.find({ restaurantes: codRestaurante }).populate('restaurante');
    if(!caja){
      res.status(404).json({
        mensaje:'Objeto no existe'
      })
    }
    res.json(caja)
  } catch (error) {
    res.status(400).send(error);
  }
}

exports.cambiarEstadoCaja = async(req, res)=>{
  try {
    const id= req.params.id;
    const estado= req.params.estado;
    const caja = await Cajas.findById(id).populate('restaurante');
    caja.abierta = estado;
    caja.save();

    res.json({
      mensaje:'Objeto actualizado con exito'
    })
  } catch (error) {
    res.status(400).send(error);
  }
}
