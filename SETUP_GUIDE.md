# Three Space Shine - Setup Guide

Complete setup instructions for your detailing business app.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database (or Supabase account)
- Git (optional, for version control)

## Step 1: Install Dependencies

### Backend Dependencies
```bash
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
npm install
```

### Frontend Dependencies
```bash
cd client
npm install
```

## Step 2: Database Setup

### Option A: Using Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings > Database
4. Copy the connection string (URI format)
5. Use this in your `.env` file

### Option B: Local PostgreSQL

1. Install PostgreSQL on your machine
2. Create a new database:
```sql
CREATE DATABASE threespacshine;
```
3. Note your connection details

## Step 3: Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Database - Use your Supabase or local PostgreSQL URL
DATABASE_URL=postgresql://user:password@host:5432/threespacshine

# JWT Secret - Generate a random string
JWT_SECRET=your-super-secret-random-string-here

# Server
PORT=5000
NODE_ENV=development

# Admin Credentials (CHANGE THESE!)
ADMIN_EMAIL=admin@threespacshine.com
ADMIN_PASSWORD=Admin123!

# Email (Optional - for booking confirmations)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Stripe (Optional - for payments)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLIC_KEY=pk_test_your_key

# Frontend URL
CLIENT_URL=http://localhost:3000
```

Create `.env` file in the `client` directory:

```bash
cd client
echo REACT_APP_API_URL=http://localhost:5000/api > .env
```

## Step 4: Initialize Database

Run the database setup script:

```bash
npm run db:setup
```

This will:
- Create all necessary tables
- Add default services (Car, House, Office detailing packages)
- Create admin user

## Step 5: Start the Application

### Development Mode (Both servers)
```bash
npm run dev
```

This starts:
- Backend API on http://localhost:5000
- Frontend on http://localhost:3000

### Or start separately:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

## Step 6: Access the Application

1. **Frontend:** http://localhost:3000
2. **Backend API:** http://localhost:5000/api/health

### Default Admin Login
- Email: `admin@threespacshine.com`
- Password: `Admin123!`

**⚠️ IMPORTANT: Change these credentials immediately!**

## Step 7: Test the Application

1. Visit http://localhost:3000
2. Click "Get Started" to register a new account
3. Browse services
4. Book a test appointment
5. Login as admin to view dashboard

## Customization

### Update Business Information

Edit these files:
- `README.md` - Update contact info
- `.env` - Update business details
- `client/src/pages/Home.js` - Update homepage content

### Add Your Logo

Replace the Sparkles icon in:
- `client/src/components/Navbar.js`
- `client/src/pages/Home.js`
- `client/src/pages/Login.js`
- `client/src/pages/Register.js`

### Modify Service Packages

Edit prices and features in:
- `server/config/setup-db.js` (lines 50-70)

Then re-run:
```bash
npm run db:setup
```

## Production Deployment

### Backend (Render.com)

1. Create account at render.com
2. Create new Web Service
3. Connect your Git repository
4. Set environment variables from `.env`
5. Deploy

### Frontend (Netlify)

1. Build the frontend:
```bash
cd client
npm run build
```

2. Deploy `client/build` folder to Netlify
3. Set environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com/api`

## Troubleshooting

### Database Connection Error
- Check your `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Verify firewall settings

### Port Already in Use
- Change `PORT` in `.env`
- Or kill the process using the port

### Frontend Can't Connect to Backend
- Check `REACT_APP_API_URL` in `client/.env`
- Ensure backend is running
- Check CORS settings in `server/index.js`

### Admin Can't Login
- Verify admin credentials in `.env`
- Re-run `npm run db:setup`

## Support

For issues or questions:
- Email: info@threespacshine.com
- Check README.md for more details

---

**You're all set! 🎉**

Your Three Space Shine detailing app is ready to use!
