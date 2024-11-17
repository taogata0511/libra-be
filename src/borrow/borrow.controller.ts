import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { BorrowRequestDto } from './borrow.request.dto';
import { BorrowService } from './borrow.service';

@Controller('borrow')
export class BorrowController {
  constructor(private borrowService: BorrowService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        borrowUserId: {
          type: 'number',
          default: '1',
        },
        bookId: {
          type: 'number',
          default: '1',
        },
        checkoutDate: {
          type: 'Date',
          default: '2024-01-01',
        },
        expectedReturnDate: {
          type: 'Date',
          default: '2024-01-14',
        },
      },
    },
  })
  @Post('')
  async borrow(@Body() request: BorrowRequestDto) {
    return await this.borrowService.createBorrow(request);
  }
}
