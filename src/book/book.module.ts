import { Module } from '@nestjs/common';
import { PrismaModule } from '../utils/prisma/prisma.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [PrismaModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class BookModule {}
