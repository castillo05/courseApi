module.exports=(sequelize,DataTypes)=>{
    const students=sequelize.define('students',{
       

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement: true},
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING

    },{

    });

    return students;
}