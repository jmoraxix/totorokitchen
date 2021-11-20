const DetallesUnidad = require('totoro-models').DetalleUnidad;

exports.getAll = async(req, res)=>{
    try {
        const detalleUnidad = await DetallesUnidad.find();
        res.json(detalleUnidad);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const detalleUnidad = await DetallesUnidad.findById(id);
        if(!detalleUnidad){
            res.status(404).json({
                mensaje:'El detalle de la unidad no existe'
            })
        }
        res.json(detalleUnidad)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const detalleUnidad= new DetallesUnidad(req.body);
    try {
        await detalleUnidad.save();
        res.json({
            mensaje:'Se creo un detalle de unidad'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const detalleUnidad = await DetallesUnidad.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el detalle de la unidad'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const detalleUnidad = await DetallesUnidad.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el detalle de unidad ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}