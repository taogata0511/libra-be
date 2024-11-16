import { Module } from '@nestjs/common';

import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';

@Module({
  imports: [BookModule, BorrowModule],
})
export class AppModule {}
