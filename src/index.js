import app from './app';
import db from './models';
import dotenv from 'dotenv';
const port=9000;

dotenv.config();


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