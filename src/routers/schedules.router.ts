import { Router } from "express"
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware"
import { verifyRealEstateScheduleExists, verifyRealEstateExists, verifyUserScheduleExists } from "../middlewares/schedules.middleware"
import { createNewScheduleSchema } from "../schemas/schedules.schema"
import { createScheduleController, readAllScheduleRealEstateController } from "../controllers/schedules.controllers"

export const scheduleRouter: Router = Router()

scheduleRouter.post('/', verifyToken, validateBody(createNewScheduleSchema), verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists, createScheduleController)
scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllScheduleRealEstateController)