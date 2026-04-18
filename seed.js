const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const initialProducts = [
  {
    name: "Babylayers Small (S)",
    price: 549,
    size: "Small (S)",
    highlight: "Gentle Fit",
    description: "Perfect for growing bodies. Advanced leak lock technology.",
    image: "/products/pants.png"
  },
  {
    name: "Babylayers Medium (M)",
    price: 599,
    size: "Medium (M)",
    highlight: "Active Comfort",
    description: "360-degree stretchable waist for active babies.",
    image: "/products/medium.png"
  },
  {
    name: "Babylayers Large (L)",
    price: 649,
    size: "Large (L)",
    highlight: "Overnight Protection",
    description: "Maximum absorbency for overnight protection.",
    image: "/products/pants.png"
  },
  {
    name: "Babylayers X-Large (XL)",
    price: 749,
    size: "X-Large (XL)",
    highlight: "Maximum Mobility",
    description: "Breathable comfort for toddlers.",
    image: "/products/xlarge.png"
  }
];

async function main() {
  console.log('Cleaning up existing data...');
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  
  console.log('Seeding products (S, M, L, XL)...');
  for (const p of initialProducts) {
    await prisma.product.create({ data: p });
  }
  console.log('Products seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
