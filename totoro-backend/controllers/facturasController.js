const Facturas = require('totoro-models').Facturas;

exports.getAll = async(req, res)=>{
    try {
        const facturas = await Facturas.find();
        res.json(facturas);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const facturas = await Facturas.findById(id);
        if(!facturas){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(facturas)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const facturas= new Facturas(req.body);
    try {
        await facturas.save();
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
        const facturas = await Facturas.findOneAndUpdate(
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
        const facturas = await Facturas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}