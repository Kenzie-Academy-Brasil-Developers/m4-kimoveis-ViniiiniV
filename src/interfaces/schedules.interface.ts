import { z } from "zod";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import { Schedule } from "../entities";
import { Repository } from "typeorm";


export type CreateSchedule = z.infer<typeof createNewScheduleSchema>

export type ScheduleRepo = Repository<Schedule>