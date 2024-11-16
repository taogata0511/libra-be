export interface BorrowRequest {
  borrowUserId: number;
  bookId: number;
  checkoutDate: Date;
  expectedReturnDate: Date;
}
