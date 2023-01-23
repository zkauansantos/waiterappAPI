import express from 'express';
import mongoose from 'mongoose';


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express();

		const port = 3001;
		app.listen(port, () => {
			console.log(`Server stater at http://localhost:${port}`);
		});

		console.log('conectado ao mongo');
	})
	.catch(() => console.log('erro ao conectar'));

