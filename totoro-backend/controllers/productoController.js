const Productos = require('totoro-models').Producto;

exports.getAll = async(req, res)=>{
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const productos = await Productos.findById(id).populate('marca').populate('unidadMedida').populate('tipoComestible').populate('lineaComestible').populate('claseComestible').populate('restaurantes');
        if(!productos){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(productos)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const productos= new Productos(req.body);
    try {
        await productos.save();
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
        const productos = await Productos.findOneAndUpdate(
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
        const productos = await Productos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}