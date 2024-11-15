import { Controller, Get, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    content: {
      'application/json': {
        example: [
          {
            id: '1',
            title: '呪術廻戦',
            cover:
              'https://m.media-amazon.com/images/I/71RJPPBHNGL._AC_UF1000,1000_QL80_.jpg',
            code: '9784088826124',
            donorUserId: '1',
            createdAt: '2024-11-12T14:08:46.000Z',
            updatedAt: '2024-11-12T14:08:46.000Z',
          },
        ],
      },
    },
  })
  @Get('/list')
  findAll() {
    return this.bookService.getBooks();
  }
}
