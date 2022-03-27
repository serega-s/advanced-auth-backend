import { Module } from "@nestjs/common"
import { PostsService } from "./posts.service"
import { PostsController } from "./posts.controller"
import { SequelizeModule } from "@nestjs/sequelize"
import { Post } from "./posts.model"
import { User } from "src/users/users.model"

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post])],
})
export class PostsModule {}
