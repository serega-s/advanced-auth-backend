import { ApiProperty } from "@nestjs/swagger"
import {
  DataType,
  Model,
  Column,
  Table,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript"
import { Post } from "src/posts/posts.model"
import { Role } from "src/roles/roles.model"
import { UserRoles } from "src/roles/user-roles.model"

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: "user@email.com", description: "Email" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: "12345678", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: "false", description: "Ban state of user" })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: "For spam", description: "Ban reason" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}
