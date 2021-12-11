const Cajas = require('totoro-models').Cajas;

exports.getAll = async(req, res)=>{
    try {
        const cajas = await Cajas.find();
        res.json(cajas);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const cajas = await Cajas.findById(id);
        if(!cajas){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(cajas)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const cajas= new Cajas(req.body);
    try {
        await cajas.save();
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
        const cajas = await Cajas.findOneAndUpdate(
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
        const cajas = await Cajas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}