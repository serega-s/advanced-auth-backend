import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator"

export class CreateUserDto {
  @ApiProperty({ example: "user@email.com", description: "Email" })
  @IsString({ message: "It must be a string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string

  @ApiProperty({ example: "12345678", description: "Password" })
  @IsString({ message: "It must be a string" })
  @Length(6, 50, { message: "More than 6 and less than 50" })
  readonly password: string
}
