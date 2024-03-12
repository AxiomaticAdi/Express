import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

// Start the server on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
