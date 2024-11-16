import { Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

import { BorrowRequest } from './borrow.interface';

export class BorrowRequestDto implements BorrowRequest {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  borrowUserId: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  bookId: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  checkoutDate: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  expectedReturnDate: Date;
}
