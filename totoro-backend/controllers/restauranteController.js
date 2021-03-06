const Restaurantes = require('totoro-models').Restaurante;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const restaurantes = await Restaurantes.find();
        res.json(restaurantes);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getAllActivos = async(req, res)=>{
    try {
        const restaurantes = await Restaurantes.find({ activo: true });
        res.json(restaurantes);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const restaurantes = await Restaurantes.findById(id);
        if(!restaurantes){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(restaurantes)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var restaurantes= new Restaurantes(req.body);
    restaurantes.codigo = await consecutivoController.generarConsecutivo('Restaurante');
    try {
        await restaurantes.save();
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
        const restaurantes = await Restaurantes.findOneAndUpdate(
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
        const restaurantes = await Restaurantes.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}