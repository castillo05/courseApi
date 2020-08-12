import app from './app';
import db from './models';
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT;




(async()=>{
    try {
        await db.sequelize.authenticate();

        app.listen(port,()=>{
            console.log('Server running '+port);
        })
       
    } catch (error) {
        console.log(error);
    }
})()