const Platillos = require('totoro-models').Platillo;

exports.getAll = async(req, res)=>{
    try {
        const platillos = await Platillos.find();
        res.json(platillos);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const platillos = await Platillos.findById(id)
            .populate('unidadMedida')
            .populate('tipoComida')
            .populate('tipoBebida')
            .populate('tipoPlatillo')
            .populate('pais')
            .populate('marca');
        if(!platillos){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(platillos)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const platillos= new Platillos(req.body);
    try {
        await platillos.save();
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
        const platillos = await Platillos.findOneAndUpdate(
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
        const platillos = await Platillos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}