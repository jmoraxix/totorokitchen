const Mesas = require('totoro-models').Mesa;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const mesas = await Mesas.find()
            .populate('restaurante');
        res.json(mesas);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const mesas = await Mesas.findById(id)
            .populate('restaurante');
        if(!mesas){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(mesas)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var mesas= new Mesas(req.body);
    mesas.codigo = await consecutivoController.generarConsecutivo('Mesa');
    try {
        await mesas.save();
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
        const mesas = await Mesas.findOneAndUpdate(
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
        const mesas = await Mesas.findOneAndDelete({_id:id});
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
    const mesas = await Mesas.find({ restaurantes: codRestaurante }).populate('restaurantes');
    if(!mesas){
      res.status(404).json({
        mensaje:'Objeto no existe'
      })
    }
    res.json(mesas)
  } catch (error) {
    res.status(400).send(error);
  }
}