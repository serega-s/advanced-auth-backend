import { ApiProperty } from "@nestjs/swagger"
import {
  DataType,
  Model,
  Column,
  Table,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript"
import { Role } from "src/roles/roles.model"
import { User } from "src/users/users.model"

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number
}
