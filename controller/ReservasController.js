const {reservas}=require("../models")
const {Router}=require("express")


const router=Router() 

router.get("/", async(req,res)=>{
    const reserva=await reservas.findAll();
    res.status(200).json(reserva)
});
router.get("/:id", async(req,res)=>{
    const reserva=await reservas.findByPk(req.params.id);
    res.status(200).json(reserva)
});
router.post("/", async(req,res)=>{
    const {nameArea,diaEntrada,diaSaida,horaEntrada,horaSaida,comentario}=req.body
    const newreserva=await reservas.create({nameArea,diaEntrada,diaSaida,horaEntrada,horaSaida,comentario});
    res.status(200).json(newreserva)
})
router.delete("/:id", async(req,res)=>{
    await reservas.destroy({
        where:{
            id:req.params.id,
        },
    });
    res.status(200).json({msg:"Reserva excluido com sucesso!"})
});
router.put("/:id", async(req,res)=>{
    const {nameArea,diaEntrada,diaSaida,horaEntrada,horaSaida,comentario}=req.body
    await reservas.update(
        {nameArea,diaEntrada,diaSaida,horaEntrada,horaSaida,comentario},
        {
            where:{id: req.params.id}
        }
    );
    res.status(200).json({msg: "dados atualizado com sucesso!"});
   
})  

module.exports=router

