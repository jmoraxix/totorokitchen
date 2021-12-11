const Bitacoras = require('totoro-models').Bitacora;

exports.getAll = async(req, res)=>{
    try {
        const bitacoras = await Bitacoras.find();
        res.json(bitacoras);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const bitacoras = await Bitacoras.findById(id);
        if(!bitacoras){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(bitacoras)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const bitacoras= new Bitacoras(req.body);
    try {
        await bitacoras.save();
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
        const bitacoras = await Bitacoras.findOneAndUpdate(
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
        const bitacoras = await Bitacoras.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}