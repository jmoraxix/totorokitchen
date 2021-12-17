const UnidadMedidas = require('totoro-models').UnidadMedida;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const unidadMedidas = await UnidadMedidas.find();
        res.json(unidadMedidas);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const unidadMedidas = await UnidadMedidas.findById(id).populate('detalleUnidad');
        if(!unidadMedidas){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(unidadMedidas)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var unidadMedidas= new UnidadMedidas(req.body);
    unidadMedidas.codigo = await consecutivoController.generarConsecutivo('UnidadMedida');
    try {
        await unidadMedidas.save();
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
        const unidadMedidas = await UnidadMedidas.findOneAndUpdate(
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
        const unidadMedidas = await UnidadMedidas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}