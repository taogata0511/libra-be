import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ユーザーのダミーデータ
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      isActive: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      isActive: false,
    },
  });

  // 本のダミーデータ
  const book1 = await prisma.book.create({
    data: {
      title: 'Figmaで作るUIデザインアイデア集 サンプルで学ぶ35のパターン',
      cover:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9084/9784295019084_1_2.jpg?_ex=200x200',
      code: '9784295019084',
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title:
        'AWS認定資格試験テキスト　AWS認定SysOpsアドミニストレーター - アソシエイト',
      cover:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9085/9784815609085_1_3.jpg?_ex=200x200',
      code: '9784815609085',
    },
  });

  // 寄付のダミーデータ
  await prisma.donate.createMany({
    data: [
      { donateUserId: user1.id, bookId: book1.id },
      { donateUserId: user2.id, bookId: book2.id },
    ],
  });

  // 借用のダミーデータ
  await prisma.borrow.create({
    data: {
      checkoutDate: new Date(),
      expectedReturnDate: new Date(
        new Date().setDate(new Date().getDate() + 14),
      ),
      User: {
        connect: { id: user2.id },
      },
      Book: {
        connect: { id: book1.id },
      },
    },
  });

  await prisma.borrow.create({
    data: {
      checkoutDate: new Date(),
      expectedReturnDate: new Date(
        new Date().setDate(new Date().getDate() + 7),
      ),
      User: {
        connect: { id: user1.id },
      },
      Book: {
        connect: { id: book2.id },
      },
    },
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
