import { Module } from '@nestjs/common';

import { PrismaModule } from '../utils/prisma/prisma.module';
import { BorrowController } from './borrow.controller';
import { BorrowService } from './borrow.service';

@Module({
  imports: [PrismaModule],
  controllers: [BorrowController],
  providers: [BorrowService],
  exports: [],
})
export class BorrowModule {}
