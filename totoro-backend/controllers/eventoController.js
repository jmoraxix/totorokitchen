const Eventos = require('totoro-models').Evento;
const consecutivoController = require('../controllers/consecutivoController.js');

exports.getAll = async(req, res)=>{
    try {
        const evento = await Eventos.find();
        res.json(evento);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const evento = await Eventos.findById(id);
        if(!evento){
            res.status(404).json({
                mensaje:'El evento no existe'
            })
        }
        res.json(evento)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    var evento= new Eventos(req.body);
    evento.codigo = await consecutivoController.generarConsecutivo('Evento');
    try {
        await evento.save();
        res.json({
            mensaje:'Se creo un evento'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const evento = await Eventos.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el evento'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const evento = await Eventos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el evento ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}