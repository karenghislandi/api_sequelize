const {areas}=require("../models")
const {Router}=require("express")


const router=Router() 

router.get("/", async(req,res)=>{
    const area=await areas.findAll();
    res.status(200).json(area)
});
router.get("/:id", async(req,res)=>{
    const area=await areas.findByPk(req.params.id);
    res.status(200).json(area)
});
router.post("/", async(req,res)=>{
    const {nameAreas,descricao,diasFuncionamento,horasFuncionamento}=req.body
    const newareas=await areas.create({nameAreas,descricao,diasFuncionamento,horasFuncionamento});
    res.status(200).json(newareas)
})
router.delete("/:id", async(req,res)=>{
    await areas.destroy({
        where:{
            id:req.params.id,
        },
    });
    res.status(200).json({msg:"Area de lazer excluido com sucesso!"})
});
router.put("/:id", async(req,res)=>{
    const {nameAreas,descricao,diasFuncionamento,horasFuncionamento}=req.body
    await areas.update(
        {nameAreas,descricao,diasFuncionamento,horasFuncionamento},
        {
            where:{id: req.params.id}
        }
    );
    res.status(200).json({msg: "dados atualizado com sucesso!"});
   
})  

module.exports=router

