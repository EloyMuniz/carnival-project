import express from "express"

import UsersController from "./Controllers/UsersController";
import usersRouter from "../routes/usersroutes";

var app = express();
const PORT = 8080

const apiVersion = "v1";
app.get(`/${apiVersion}`, function (req, res) {
    res.send('Hello World!');
});
app.use(express.json());
app.use(usersRouter)
app.listen(PORT, () =>
    console.log(`✨ Server started on ${PORT}`));
    