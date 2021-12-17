const Proveedores = require('totoro-models').Proveedores;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const proveedores = await Proveedores.find();
        res.json(proveedores);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const proveedores = await Proveedores.findById(id).populate('producto').populate('restaurante');
        if(!proveedores){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(proveedores)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var proveedores= new Proveedores(req.body);
    proveedores.codigo = await consecutivoController.generarConsecutivo('Proveedor');
    try {
        await proveedores.save();
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
        const proveedores = await Proveedores.findOneAndUpdate(
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
        const proveedores = await Proveedores.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}