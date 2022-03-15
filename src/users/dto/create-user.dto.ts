import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty({ example: "user@email.com", description: "Email" })
  readonly email: string

  @ApiProperty({ example: "12345678", description: "Password" })
  readonly password: string
}
