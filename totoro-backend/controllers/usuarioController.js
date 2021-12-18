const Usuarios = require('totoro-models').Usuario;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const usuarios = await Usuarios.find()
        res.json(usuarios);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const usuarios = await Usuarios.findById(id)
            .populate('consecutivo');
        if(!usuarios){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(usuarios)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var usuarios= new Usuarios(req.body);
   usuarios.codigo = await consecutivoController.generarConsecutivo('Usuario');
   console.log(req.body)
    try {
        await usuarios.save();
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
        const usuarios = await Usuarios.findOneAndUpdate(
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
        const usuarios = await Usuarios.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}