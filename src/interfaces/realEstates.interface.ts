import { Repository } from "typeorm"
import { Address, RealEstate } from "../entities"
import { createRealEstateSchema } from "../schemas/realEstates.schema"
import { z } from "zod"

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>