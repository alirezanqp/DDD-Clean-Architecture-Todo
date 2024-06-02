import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateTodoItemRequestDto {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @ApiProperty()
  @MinLength(10)
  @MaxLength(100)
  description: string;

  @ApiProperty()
  priority: string;
}
