module.exports=(sequelize,DataTypes)=>{
    const students=sequelize.define('students',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:DataTypes.STRING,
        schedule:DataTypes.STRING,
        dateStart:DataTypes.STRING,
        dateEnd:DataTypes.STRING,
        numberStudents:DataTypes.INTEGER

    },{

    });

    return students;
}