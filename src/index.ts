import express from 'express';

const app = express();

app.listen(3002, () => {
	console.log('Server stater at http://localhost:3002');
});