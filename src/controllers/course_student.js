import db from '../models';
import {} from './courses';

const addCourseStudent= async(req, res)=>{
    try {
        const {id_student,id_course}= req.body;

        const addCourse= await db.course_students.create({
            id_course:id_course,
            id_student: id_student
        })

        if(addCourse){
            res.status(200).send({suscription:addCourse})
        }else{

        }
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    addCourseStudent
}