import express from 'express'

const app = express();

app.get('/', (req, res) => {
	res.send("<h1>Hello World</h2>");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});