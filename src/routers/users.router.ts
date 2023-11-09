import { Router } from "express"
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware"
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware"
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controllers/users.controllers"
import { createUserSchema } from "../schemas/users.schema"

export const userRouter: Router = Router()

userRouter.post('/',validateBody(createUserSchema), verifyUniqueUserEmail, createUserController)
userRouter.get('/', verifyToken, verifyAdmin, readAllUsersController)

userRouter.patch('/:id', verifyToken, verifyUserExists, verifyPermissions, updateUserController)
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, deleteUserController)