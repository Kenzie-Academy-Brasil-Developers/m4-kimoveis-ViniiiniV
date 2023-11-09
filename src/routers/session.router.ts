import { Router } from "express"
import { loginController } from "../controllers/session.controllers"

export const loginRouter: Router = Router()

loginRouter.post('/', loginController)