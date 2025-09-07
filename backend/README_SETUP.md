# Backend Setup Instructions

## Prerequisites

1. **MongoDB Installation**
   - Install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Or use Docker: `docker run -d --name mongo -p 27017:27017 mongo:6`

2. **Node.js**
   - Ensure Node.js 18+ is installed

## Environment Setup

1. **Create `.env` file** in the backend root directory:
   ```bash
   # Copy from .env.sample or create manually
   MONGO_URI=mongodb://127.0.0.1:27017/zoroinnovations
   PORT=8000
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

2. **Start MongoDB Service**
   - Windows: Run PowerShell as Admin → `net start MongoDB`
   - macOS/Linux: `sudo systemctl start mongod`
   - Docker: `docker start mongo`

## Database Seeding

1. **Populate with sample data:**
   ```bash
   npm run seed
   ```

   This will create:
   - 4 sample articles with different categories
   - 4 categories (Frontend, Backend, Design, Database)
   - Proper relationships between articles and categories

2. **Verify seeding:**
   - Check console output for success messages
   - Articles should appear in your frontend

## Starting the Server

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Verify connection:**
   - Console should show: "✅ MongoDB connected successfully!"
   - API endpoint: http://localhost:8000/api/v1/articles

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check if port 27017 is available
- Verify MONGO_URI in .env file
- Try connecting manually: `mongosh mongodb://127.0.0.1:27017`

### 500 Errors
- Check MongoDB connection status
- Verify database and collections exist
- Run `npm run seed` to populate data
- Check server console for error details

### Port Issues
- Ensure port 8000 is not in use
- Change PORT in .env if needed
- Check firewall settings

## API Endpoints

- `GET /api/v1/articles` - List all articles
- `GET /api/v1/articles/:id` - Get single article
- `POST /api/v1/articles` - Create article (admin only)
- `PUT /api/v1/articles/:id` - Update article (admin only)
- `DELETE /api/v1/articles/:id` - Delete article (admin only)

## Sample Data Structure

Articles include:
- title, desc, content
- author, tag, category
- views, likes, featured status
- timestamps (createdAt, updatedAt)

Categories include:
- name, slug, description
- article_count (auto-updated)
