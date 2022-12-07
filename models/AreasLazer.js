const areas=(sequelize,DataTypes)=>{
    return sequelize.define("areas",{
        nameAreas:DataTypes.STRING,
        descricao:DataTypes.STRING,
        diasFuncionamento:DataTypes.STRING,
        horasFuncionamento:DataTypes.STRING,
    });
};
module.exports=areas