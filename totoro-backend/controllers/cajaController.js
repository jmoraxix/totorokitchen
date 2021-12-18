const Cajas = require('totoro-models').Caja;

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
    const caja = await Cajas.find({ restaurante: codRestaurante }).populate('restaurante');
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

exports.abrirCaja = async(req, res)=>{
  try {
    const id= req.params.id;
    const caja = await Cajas.findById(id);
    caja.abierta = true;
    caja.save();

    res.json({
      mensaje:'Objeto actualizado con exito'
    })
  } catch (error) {
    res.status(400).send(error);
  }
}


exports.cerrarCaja = async(req, res)=>{
  try {
    const id= req.params.id;
    const caja = await Cajas.findById(id);
    caja.abierta = false;
    caja.dinero = 0;
    caja.save();

    res.json({
      mensaje:'Objeto actualizado con exito'
    })
  } catch (error) {
    res.status(400).send(error);
  }
}
