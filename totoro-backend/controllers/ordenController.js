const Orden = require('totoro-models').Orden;

exports.getAll = async(req, res)=>{
    try {
        const orden = await Orden.find();
        res.json(orden);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const orden = await Orden.findById(id).populate('estadoOrden').populate('mesas').populate('platillos');
        if(!orden){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(orden)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const orden= new Orden(req.body);
    try {
        await orden.save();
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
        const orden = await Orden.findOneAndUpdate(
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
        const orden = await Orden.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}