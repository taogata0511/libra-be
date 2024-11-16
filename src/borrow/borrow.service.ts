import { Injectable } from '@nestjs/common';

import { PrismaService } from '../utils/prisma/prisma.service';
import { BorrowRequest } from './borrow.interface';

@Injectable()
export class BorrowService {
  constructor(private prismaService: PrismaService) {}

  updateBorrow(request: BorrowRequest) {
    return this.prismaService.borrow.create({
      data: { ...request },
    });
  }
}
