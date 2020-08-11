import db from '../models';

const createCourse= async(req, res)=>{
    try {
        const {name,schedule,dateStart,dateEnd,numberStudents}= req.body;

        db.courses.create({
            name:name,
            schedule: schedule,
            dateStart: dateStart,
            dateEnd: dateEnd,
            numberStudents: numberStudents
        }).then(course => {
            res.status(200).send({course:course})
        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

const getCourse= async (req, res) => {
    try {
        const id=req.params.id

        const getCourse= await db.courses.findByPk(id,{
            include:[
                {
                    model:db.students,
                    as:'students'
                }
            ]
        });

        if(getCourse=== null){
            res.status(200).send({message:'Curso no encontrado'})
        }else{
            res.status(200).send({course:getCourse});
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports ={ 
    createCourse,
    getCourse
}