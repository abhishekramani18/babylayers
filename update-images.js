const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imgs = [
  'https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519782559714-257a41285223?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522771930-78848d926c56?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616422285623-14bf5ae6574f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
];

async function main() {
  for (let i = 0; i < imgs.length; i++) {
    await prisma.product.update({ where: { id: i + 1 }, data: { image: imgs[i] } });
  }
  console.log('Images updated!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
