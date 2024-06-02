import { ApiProperty } from '@nestjs/swagger';
import { ResponseBase } from 'src/libs/api';

export class TodoItemResponseDto extends ResponseBase {
  @ApiProperty({ example: 'Todo Item' })
  title: string;

  @ApiProperty({ example: 'Todo Item description' })
  description: string;

  @ApiProperty({ example: 'High' })
  priority: string;
}
