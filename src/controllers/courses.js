import db from '../models';

const createCourse= async(req, res)=>{
    try {
        const {name,schedule,dateStart,dateEnd}= req.body;

        if(name==='' || schedule==='' || dateStart==='' || dateEnd==='') return res.status(200).send({message:'Complete todos los campos'})

        db.courses.create({
            name:name,
            schedule: schedule,
            dateStart: dateStart,
            dateEnd: dateEnd,
            numberStudents: 0
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


const getCourses= async (req, res) => {
    try {
        const getCourses= await db.courses.findAll();

        getCourses !== null ? res.status(200).send({courses:getCourses}) : res.status(200).send({message:'No hay cursos disponibles'})
    } catch (error) {
        console.log(error)
    }
}

const updateCourse= async (req, res) => {
    try {
        const id = req.params.id;

        const {name,schedule,dateStart,dateEnd}= req.body;

        const update= await db.courses.update({
            name:name,
            schedule: schedule,
            dateStart: dateStart,
            dateEnd: dateEnd
        },{
            where: {
                id: id
            }
        })

        if(update){
            res.status(200).send({message:'Curso actualizado con exito'})
        }else{
            res.status(200).send({message:'Lo sentimos este curso no se puede actualizar'})
        }
    } catch (error) {
        console.log(error)
    }
}

const getCoursesCount= async (req, res) => {
    try {
        const getCourses= await db.courses.findAll({
           limit:3,
            order:[
                ['numbersStudents','DESC']
            ]
        });

        getCourses !== null ? res.status(200).send({courses:getCourses}) : res.status(200).send({message:'No hay cursos disponibles'})
    } catch (error) {
        console.log(error)
    }
}

const deleteCourse=async (req, res) => {
   try {
    const id= req.params.id;

    const deleted= await db.courses.destroy({
        where: {
            id: id
        }
    })

    if(deleted){
        res.status(200).send({message:'Curso Eliminado'})
    }
   } catch (error) {
       console.log(error)
   }
}

module.exports ={ 
    createCourse,
    getCourse,
    getCourses,
    updateCourse,
    getCoursesCount,
    deleteCourse
}