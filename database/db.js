import mongoose from 'mongoose';


const DBConnection = async () => {
    
    const MONGO_URI = `mongodb://bhagataman1999:AmanKumar@ac-mvrqgwo-shard-00-00.yl38szv.mongodb.net:27017,ac-mvrqgwo-shard-00-01.yl38szv.mongodb.net:27017,ac-mvrqgwo-shard-00-02.yl38szv.mongodb.net:27017/?ssl=true&replicaSet=atlas-zszke0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
 

    } 
    catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;