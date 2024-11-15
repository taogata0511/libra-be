import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ユーザーの作成
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

  // 本の作成
  const book1 = await prisma.book.create({
    data: {
      title: 'Figmaで作るUIデザインアイデア集 サンプルで学ぶ35のパターン',
      cover:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9084/9784295019084_1_2.jpg?_ex=200x200',
      code: '9784295019084',
      donorUserId: user1.id,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title:
        'AWS認定資格試験テキスト　AWS認定SysOpsアドミニストレーター - アソシエイト',
      cover:
        'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9085/9784815609085_1_3.jpg?_ex=200x200',
      code: '9784815609085',
      donorUserId: user2.id,
    },
  });

  // 寄付の記録
  await prisma.donate.createMany({
    data: [
      { donorId: user1.id, bookId: book1.id },
      { donorId: user2.id, bookId: book2.id },
    ],
  });

  // レンタルの作成
  await prisma.rental.create({
    data: {
      borrowerId: user2.id,
      checkoutDate: new Date(),
      expectedReturnDate: new Date(
        new Date().setDate(new Date().getDate() + 14),
      ), // 2週間後
    },
  });
}

main()
  .then(() => console.log('Seeding completed!'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
