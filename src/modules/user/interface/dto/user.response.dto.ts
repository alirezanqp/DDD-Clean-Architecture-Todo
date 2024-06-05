import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from 'src/libs/api';

export class UserResponseDto extends ResponseBase {
  @ApiProperty()
  username: string;
}
