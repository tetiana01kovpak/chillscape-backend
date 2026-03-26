import mongoose from 'mongoose';

const connectMongoDB = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error('MONGO_URL is not defined');
  }

  await mongoose.connect(mongoUrl);
};

export default connectMongoDB;

