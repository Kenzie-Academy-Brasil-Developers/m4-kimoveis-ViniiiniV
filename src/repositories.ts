import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { ScheduleRepo } from './interfaces/schedules.interface';
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { CategoryRepo } from "./interfaces/categories.interface";
import { UserRepo } from "./interfaces/users.interface";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)