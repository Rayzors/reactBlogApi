import Express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import Multer from 'multer';
import cors from 'cors';
import postRouter from './services/Post.service.mjs';
import userRouter from './services/User.service.mjs';

Mongoose.connect(process.env.MONGO_SERVER, { useNewUrlParser: true });

const server = Express();
const uploads = Multer({ dest: 'uploads/' });

server.use(cors());
server.use(uploads.any());
server.use(bodyParser.json());
server.use('/api', postRouter);
server.use('/api', userRouter);

server.listen(process.env.PORT, () =>
  console.log(`Listen port ${process.env.PORT}`)
);
