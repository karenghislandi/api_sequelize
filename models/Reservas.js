const reservas=(sequelize,DataTypes)=>{
    return sequelize.define("reservas",{
        nameArea:DataTypes.STRING,
        diaEntrada:DataTypes.STRING,
        diaSaida:DataTypes.STRING,
        horaEntrada:DataTypes.STRING,
        horaSaida:DataTypes.STRING,
        comentario:DataTypes.STRING
    });
};
module.exports=reservas