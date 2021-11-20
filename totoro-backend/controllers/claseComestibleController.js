const ClasesComestibles = require('totoro-models').ClaseComestible;

exports.getAll = async(req, res)=>{
    try {
        const claseComestible = await ClasesComestibles.find();
        res.json(claseComestible);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const claseComestible = await ClasesComestibles.findById(id);
        if(!claseComestible){
            res.status(404).json({
                mensaje:'La clase comestible no existe'
            })
        }
        res.json(claseComestible)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const claseComestible= new ClasesComestibles(req.body);
    try {
        await claseComestible.save();
        res.json({
            mensaje:'Se creo una clase comestible'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const claseComestible = await ClasesComestibles.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo la clase comestible'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const claseComestible = await ClasesComestibles.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino la clase comestible ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}