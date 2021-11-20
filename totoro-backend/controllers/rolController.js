const Roles = require('totoro-models').Rol;

exports.getAll = async(req, res)=>{
    try {
        const rol = await Roles.find();
        res.json(rol);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.get = async(req, res)=>{
    try {
        console.log(req.params.id)
        const id = req.params.id;
        const rol = await Roles.findById(id);
        if(!rol){
            res.status(404).json({
                mensaje:'El rol no existe'
            })
        }
        res.json(rol)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.create = async(req, res)=>{
    const rol= new Roles(req.body);
    try {
        await rol.save();
        res.json({
            mensaje:'Se creo un rol'
        })

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.update = async(req, res)=>{
    try {
        const id= req.params.id;
        const rol = await Roles.findOneAndUpdate(
            {_id:id},
            req.body,
            {new: true}
            );
            res.json({
                mensaje:'Se actualizo el rol'
            })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete= async(req, res)=>{
    try{
        const id= req.params.id;
        const rol = await Roles.findOneAndDelete({_id:id});
        res.json({
            mensaje:`Se elimino el rol ${id} con exito`
        })
    } catch (error) {
        res.status(400).send(error);
    }
}