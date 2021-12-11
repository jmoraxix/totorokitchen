const Consecutivos = require('totoro-models').Consecutivo;

exports.getAll = async(req, res)=>{
    try {
        const consecutivos = await Consecutivos.find();
        res.json(consecutivos);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const consecutivos = await Consecutivos.findById(id);
        if(!consecutivos){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(consecutivos)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const consecutivos= new Consecutivos(req.body);
    try {
        await consecutivos.save();
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
        const consecutivos = await Consecutivos.findOneAndUpdate(
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
        const consecutivos = await Consecutivos.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.generarConsecutivo= async(req, res)=>{
    try {
        const tipo = req.query.tipo;
        var consecutivo = await Consecutivos.findOne({ tipo: tipo });

        if(!consecutivo){
          res.status(404).json({
            mensaje:'Objeto no existe'
          })
        }

        var nuevoConsecutivo = consecutivo.contienePrefijo ? consecutivo.prefijo : '';
        nuevoConsecutivo = nuevoConsecutivo + consecutivo.valor;
        console.log('nuevoConsecutivo', nuevoConsecutivo);

        consecutivo.valor = consecutivo.valor + 1;
        await Consecutivos.findOneAndUpdate(
            { _id: consecutivo._id },
            consecutivo,
            {new: true}
        );

        res.json(nuevoConsecutivo)
    } catch (error) {
        res.status(400).send(error);
    }
}