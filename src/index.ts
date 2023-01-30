import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';
import http from 'node:http';
import { Server } from 'socket.io';
import cors from './middlewares/cors';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const port = 3001;

		app.use(cors);

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);

		server.listen(port, () => {
			console.log(`Server stater at http://localhost:${port}`);
		});
		
		io.on('connect', () => {
			console.log('a user connect');
		});


		console.log('conectado ao mongo');
	})
	.catch(() => console.log('erro ao conectar'));
