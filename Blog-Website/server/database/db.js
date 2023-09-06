import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-mcx9seh-shard-00-00.wajxsq1.mongodb.net:27017,ac-mcx9seh-shard-00-01.wajxsq1.mongodb.net:27017,ac-mcx9seh-shard-00-02.wajxsq1.mongodb.net:27017/?ssl=true&replicaSet=atlas-l9f8px-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;