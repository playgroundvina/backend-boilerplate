import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    phone: string;

    @ApiProperty({ required: false, default: true })
    isEnabled?: boolean = true;
}
