import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';

import { BookService } from './book.service';

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
  async findAll() {
    return await this.bookService.getBooks();
  }

  @ApiParam({
    name: 'code',
    description: 'The ISBN code of the book',
    example: '9784295019084',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    content: {
      'application/json': {
        example: {
          id: '1',
          title: '呪術廻戦',
          cover:
            'https://m.media-amazon.com/images/I/71RJPPBHNGL._AC_UF1000,1000_QL80_.jpg',
          code: '9784088826124',
          donorUserId: '1',
          createdAt: '2024-11-12T14:08:46.000Z',
          updatedAt: '2024-11-12T14:08:46.000Z',
        },
      },
    },
  })
  @Get('/:code')
  async findByCode(@Param('code') code: string) {
    return await this.bookService.getBookByCode(code);
  }
}
