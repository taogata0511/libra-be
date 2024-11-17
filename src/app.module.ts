import { MiddlewareConsumer, Module } from '@nestjs/common';

import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';
import { LoggerMiddleware } from './utils/logger/logger.middleware';

@Module({
  imports: [BookModule, BorrowModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
