const Empresas = require('totoro-models').Empresa;

exports.getAll = async(req, res)=>{
    try {
        const empresa = await Empresas.find();
        res.json(empresa);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const empresa = await Empresas.findById(id);
        if(!empresa){
            res.status(404).json({
                mensaje:'La empresa no existe'
            })
        }
        res.json(empresa)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const empresa= new Empresas(req.body);
    try {
        await empresa.save();
        res.json({
            mensaje:'Se creo una empresa'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const empresa = await Empresas.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo la empresa'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const empresa = await Empresas.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino la empresa ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}