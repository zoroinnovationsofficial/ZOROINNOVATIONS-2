import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Article from './models/article.model.js';
import Category from './models/category.model.js';

// Load environment variables
dotenv.config({
  path: './.env',
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

// 1️⃣ Add connectDB function
const connectDB = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    return false;
  }
};

// Sample Categories
const sampleCategories = [
  { name: "Technology", slug: "technology", description: "All about tech" },
  { name: "Health", slug: "health", description: "Wellness and healthcare" },
  { name: "Education", slug: "education", description: "Learning resources" },
];

// Sample Articles
const sampleArticles = [
  {
    title: "The Future of AI",
    desc: "AI trends to watch in 2025",
    content: "Full content about AI future...",
    tag: "AI",
    author: "John Doe",
    author_img: "/images/john.png",
    date: new Date(),
    image: "/images/ai.jpg",
    featured: true,
  },
  {
    title: "Healthy Living Tips",
    desc: "Simple ways to stay fit",
    content: "Full content about health tips...",
    tag: "Health",
    author: "Jane Smith",
    author_img: "/images/jane.png",
    date: new Date(),
    image: "/images/health.jpg",
  },
];



const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Drop Articles collection
    try {
      await mongoose.connection.collection("articles").drop();
      console.log("🗑️ Dropped Articles collection");
    } catch (err) {
      if (err.code === 26) {
        console.log("ℹ️ Articles collection does not exist yet");
      } else {
        throw err;
      }
    }

    // Drop Categories collection
    try {
      await mongoose.connection.collection("categories").drop();
      console.log("🗑️ Dropped Categories collection");
    } catch (err) {
      if (err.code === 26) {
        console.log("ℹ️ Categories collection does not exist yet");
      } else {
        throw err;
      }
    }

    // Insert categories
    console.log("✅ sampleCategories length:", sampleCategories.length);
    const categories = await Category.insertMany(sampleCategories);
    console.log(`📂 Created ${categories.length} categories`);

    // Attach category references to articles
    const articlesWithCategories = sampleArticles.map((article, index) => ({
      ...article,
      category_id: categories[index % categories.length]._id
    }));

    // Insert articles
    console.log("✅ sampleArticles length:", sampleArticles.length);
    const articles = await Article.insertMany(articlesWithCategories);
    console.log(`📝 Created ${articles.length} articles`);

    // Update article counts for categories
    for (const category of categories) {
      const articleCount = await Article.countDocuments({ category_id: category._id });
      await Category.findByIdAndUpdate(category._id, { article_count: articleCount });
    }

    console.log('✅ Database seeding completed successfully!');
    console.log(`📊 Total articles: ${articles.length}`);
    console.log(`📂 Total categories: ${categories.length}`);

    // Print sample articles
    console.log('\n📋 Sample Articles:');
    articles.forEach(article => {
      console.log(`  - ${article.title} (${article.tag})`);
    });

  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  }
};

// Run the seeder
const run = async () => {
  console.log('🚀 Seed script starting...');

  const connected = await connectDB();
  if (connected) {
    console.log('📥 Calling seedDatabase...');
    await seedDatabase();
    console.log('✅ Seeding finished successfully');
  } else {
    console.error('❌ Cannot seed database without MongoDB connection');
    process.exit(1);
  }
};

run();
