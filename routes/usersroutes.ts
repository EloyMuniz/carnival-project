import { Router } from "express";
import UsersController from "../src/Controllers/UsersController";
const usersRouter = Router()
usersRouter.get(`/carnival/:bloco/:mode`, UsersController.Carnival)

export default usersRouter