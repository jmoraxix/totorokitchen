const LineasComestibles = require('totoro-models').LineaComestible;

exports.getAll = async(req, res)=>{
    try {
        const lineaComestible = await LineasComestibles.find();
        res.json(lineaComestible);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const lineaComestible = await LineasComestibles.findById(id);
        if(!lineaComestible){
            res.status(404).json({
                mensaje:'La linea comestible no existe'
            })
        }
        res.json(lineaComestible)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const lineaComestible= new LineasComestibles(req.body);
    try {
        await lineaComestible.save();
        res.json({
            mensaje:'Se creo una linea comestible'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const lineaComestible = await LineasComestibles.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo la linea comestible'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const lineaComestible = await LineasComestibles.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino la linea comestible ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}