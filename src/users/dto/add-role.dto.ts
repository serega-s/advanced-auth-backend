import { IsNumber, IsString } from "class-validator"

export class AddRoleDto {
  @IsString({ message: "It must be a string" })
  readonly value: string
  @IsNumber({}, { message: "It must be a number" })
  readonly userId: number
}
