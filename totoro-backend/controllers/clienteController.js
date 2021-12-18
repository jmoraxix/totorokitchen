const Clientes = require('totoro-models').Cliente;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const clientes = await Clientes.find();
        res.json(clientes);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const clientes = await Clientes.findById(id);
        if(!clientes){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(clientes)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var clientes= new Clientes(req.body);
    clientes.codigo = await consecutivoController.generarConsecutivo('Cliente');
    try {
        await clientes.save();
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
        const clientes = await Clientes.findOneAndUpdate(
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
        const clientes = await Clientes.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}