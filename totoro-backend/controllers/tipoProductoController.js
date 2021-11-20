const TiposProductos = require('totoro-models').TipoProducto;

exports.getAll = async(req, res)=>{
    try {
        const tipoProducto = await TiposProductos.find();
        res.json(tipoProducto);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const tipoProducto = await TiposProductos.findById(id);
        if(!tipoProducto){
            res.status(404).json({
                mensaje:'El tipo de producto no existe'
            })
        }
        res.json(tipoProducto)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const tipoProducto= new TiposProductos(req.body);
    try {
        await tipoProducto.save();
        res.json({
            mensaje:'Se creo un tipo de producto'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const tipoProducto = await TiposProductos.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el tipo de producto'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const tipoProducto = await TiposProductos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el tipo de producto ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}