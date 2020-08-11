module.exports=(sequelize,DataTypes)=>{
    const course_students=sequelize.define('course_students',{
       

        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement: true},
        id_student: DataTypes.INTEGER,
        id_course: DataTypes.INTEGER,
       
    },{

    });

   

    return course_students;
}