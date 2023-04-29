import mongoose from 'mongoose';


const DBConnection = async () => {
    
    const MONGO_URI = `mongodb://bhagatamankumar1999:Amankumar@ac-kxcl5ym-shard-00-00.s7g6for.mongodb.net:27017,ac-kxcl5ym-shard-00-01.s7g6for.mongodb.net:27017,ac-kxcl5ym-shard-00-02.s7g6for.mongodb.net:27017/?ssl=true&replicaSet=atlas-mgt8y5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
 

    } 
    catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;