const Marcas = require('totoro-models').Marca;

exports.getAll = async(req, res)=>{
    try {
        const marca = await Marcas.find();
        res.json(marca);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const marca = await Marcas.findById(id).populate('pais').populate('empresa');
        if(!marca){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(marca)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const marca= new Marcas(req.body);
    try {
        await marca.save();
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
        const marca = await Marcas.findOneAndUpdate(
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
        const marca = await Marcas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}