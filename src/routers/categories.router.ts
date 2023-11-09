import { Router } from "express"
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware"
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categorys.middleware"
import { createCategoryController, readCategoryController, readRealEstateByCategoryController } from "../controllers/categories.controllers"
import { createCategorySchema } from "../schemas/categories.schema"

export const categoryRouter: Router = Router()

categoryRouter.post('/', validateBody(createCategorySchema), verifyToken, verifyUniqueCategoryName, verifyAdmin, createCategoryController)
categoryRouter.get('/', readCategoryController)
categoryRouter.get('/:id/realEstate', verifyCategoryExists, readRealEstateByCategoryController)