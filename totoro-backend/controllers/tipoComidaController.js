const TiposComidas = require('totoro-models').TipoComida;

exports.getAll = async(req, res)=>{
    try {
        const tipoComida = await TiposComidas.find();
        res.json(tipoComida);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const tipoComida = await TiposComidas.findById(id);
        if(!tipoComida){
            res.status(404).json({
                mensaje:'El tipo de comida no existe'
            })
        }
        res.json(tipoComida)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const tipoComida= new TiposComidas(req.body);
    try {
        await tipoComida.save();
        res.json({
            mensaje:'Se creo un tipo de comida'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const tipoComida = await TiposComidas.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el tipo de comida'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const tipoComida = await TiposComidas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el tipo de comida ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}