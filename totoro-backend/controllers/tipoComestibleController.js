const TiposComestibles = require('totoro-models').TipoComestible;

exports.getAll = async(req, res)=>{
    try {
        const tipoComestible = await TiposComestibles.find();
        res.json(tipoComestible);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const tipoComestible = await TiposComestibles.findById(id);
        if(!tipoComestible){
            res.status(404).json({
                mensaje:'El tipo de comestible no existe'
            })
        }
        res.json(tipoComestible)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const tipoComestible= new TiposComestibles(req.body);
    try {
        await tipoComestible.save();
        res.json({
            mensaje:'Se creo un tipo de comestible'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const tipoComestible = await TiposComestibles.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el tipo de comestible'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const tipoComestible = await TiposComestibles.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el tipo de comestible ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}