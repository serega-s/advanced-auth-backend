import { ApiProperty } from "@nestjs/swagger"
import {
  DataType,
  Model,
  Column,
  Table,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript"
import { Role } from "src/roles/roles.model"
import { UserRoles } from "src/roles/user-roles.model"
import { User } from "src/users/users.model"

interface PostCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: "users" })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: "Title", description: "Title" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string

  @ApiProperty({ example: "Content", description: "Content" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string

  @ApiProperty({ example: "http://image.jpg", description: "Image URL" })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo(() => User)
  author: User
}
