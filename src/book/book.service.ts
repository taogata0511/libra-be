import { PrismaService } from '../utils/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  getBooks() {
    return this.prismaService.book.findMany();
  }
}
