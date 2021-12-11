const Comestibles = require('totoro-models').Comestible;

exports.getAll = async(req, res)=>{
    try {
        const comestibles = await Comestibles.find();
        res.json(comestibles);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const comestibles = await Comestibles.findById(id);
        if(!comestibles){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(comestibles)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const comestibles= new Comestibles(req.body);
    try {
        await comestibles.save();
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
        const comestibles = await Comestibles.findOneAndUpdate(
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
        const comestibles = await Comestibles.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}