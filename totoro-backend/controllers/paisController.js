const Paises = require('totoro-models').Pais;

exports.lista = async(req, res)=>{
    try {
        const pais = await Paises.find();
        res.json(pais);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.seleccionado = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const pais = await Paises.findById(id);
        if(!pais){
            res.status(404).json({
                mensaje:'El pais no existe'
            })
        }
        res.json(pais)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.agregar = async(req, res)=>{
    const pais= new Paises(req.body);
    try {
        await pais.save();
        res.json({
            mensaje:'Se creo un pais'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.actualizar = async(req, res)=>{
    try {
        const id= req.params.id;
        const pais = await Paises.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el pais'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.eliminar= async(req, res)=>{
    try{
        const id= req.params.id;
        const pais = await Paises.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el pais ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}