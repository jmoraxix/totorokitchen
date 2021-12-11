const Empleados = require('totoro-models').Empleados;

exports.getAll = async(req, res)=>{
    try {
        const empleados = await Empleados.find();
        res.json(empleados);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const empleados = await Empleados.findById(id).populate('puestos').populate('restaurantes');
        if(!empleados){
            res.status(404).json({
                mensaje:'Objeto no existe'
            })
        }
        res.json(empleados)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const empleados= new Empleados(req.body);
    try {
        await empleados.save();
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
        const empleados = await Empleados.findOneAndUpdate(
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
        const empleados = await Empleados.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Objeto eliminado ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}