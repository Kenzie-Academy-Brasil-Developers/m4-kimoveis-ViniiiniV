import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import Schedule from "./Schedule.entity"
import Address from "./Address.entity"
import Category from "./Category.entity"

@Entity('realEstates')
export default class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({default: false})
  sold: boolean

  @Column('decimal', { precision: 12, scale: 2, default: 0.0 })
  value: string | number

  @Column()
  size: number

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[]

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category
}