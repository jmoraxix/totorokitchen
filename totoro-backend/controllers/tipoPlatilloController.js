const TipoPlatillos = require('totoro-models').TipoPlatillo;

exports.getAll = async(req, res)=>{
    try {
        const tipoPlatillos = await TipoPlatillos.find();
        res.json(tipoPlatillos);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const tipoPlatillos = await TipoPlatillos.findById(id);
        if(!tipoPlatillos){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(tipoPlatillos)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const tipoPlatillos= new TipoPlatillos(req.body);
    try {
        await tipoPlatillos.save();
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
        const tipoPlatillos = await TipoPlatillos.findOneAndUpdate(
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
        const tipoPlatillos = await TipoPlatillos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}