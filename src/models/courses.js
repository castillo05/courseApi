module.exports=(sequelize, DataTypes)=>{
    const courses=sequelize.define('courses',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement: true},
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        id_course: DataTypes.INTEGER

    },
    {

    });

    return courses;
}