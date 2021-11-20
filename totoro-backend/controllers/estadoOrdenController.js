const EstadosOrden = require('totoro-models').EstadoOrden;

exports.getAll = async(req, res)=>{
    try {
        const estadoOrden = await EstadosOrden.find();
        res.json(estadoOrden);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const estadoOrden = await EstadosOrden.findById(id);
        if(!estadoOrden){
            res.status(404).json({
                mensaje:'El estado de orden no existe'
            })
        }
        res.json(estadoOrden)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const estadoOrden= new EstadosOrden(req.body);
    try {
        await estadoOrden.save();
        res.json({
            mensaje:'Se creo un estado de orden'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const estadoOrden = await EstadosOrden.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el estado de orden'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const estadoOrden = await EstadosOrden.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el estado de orden ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}