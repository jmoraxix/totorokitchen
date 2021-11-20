const TiposBebidas = require('totoro-models').TipoBebida;

exports.getAll = async(req, res)=>{
    try {
        const tipoBebida = await TiposBebidas.find();
        res.json(tipoBebida);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const tipoBebida = await TiposBebidas.findById(id);
        if(!tipoBebida){
            res.status(404).json({
                mensaje:'El tipo de bebida no existe'
            })
        }
        res.json(tipoBebida)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const tipoBebida= new TiposBebidas(req.body);
    try {
        await tipoBebida.save();
        res.json({
            mensaje:'Se creo un tipo de bebida'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const tipoBebida = await TiposBebidas.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el tipo de bebida'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const tipoBebida = await TiposBebidas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el tipo de bebida ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}